import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { connect } from 'react-redux';
import { IoIosCloseCircle, IoIosCheckmark } from 'react-icons/io';
import { Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { clearMessage } from 'redux/actions/auth.action';

export const Success = ({ message }) => (
	<div>
		<IoIosCheckmark style={{ fontSize: '2rem', marginRight: '10px' }} />
		<span>{message}</span>
	</div>
);

export const Error = ({ message }) => (
	<div>
		<IoIosCloseCircle style={{ fontSize: '2rem', marginRight: '10px' }} />
		<span>{message}</span>
	</div>
);

const Toast = ({ error, success, message, clearMessage }) => {
	useEffect(() => {
		openNotification();
	}, [success, error]);

	const openNotification = () => {
		if (success && message) {
			toast.success(<Success message={message} />, {
				hideProgressBar: true,
				// progressClassName: css({
			});
		}
		if (error && message) {
			toast.error(<Error message={message} />, {
				hideProgressBar: true,
				// progressClassName: css({
			});
		}
		setTimeout(function () {
			clearMessage();
		}, 1500);

		//
	};

	return (
		<>
			<ToastContainer
				autoClose={3000}
				pauseOnHover={true}
				position='top-center'
				transition={Slide}
			/>
		</>
	);
};
const map_state_to_props = ({ message }) => {
	return {
		success: message.success,
		error: message.error,
		message: message.message,
	};
};

export default connect(map_state_to_props, { clearMessage })(Toast);
