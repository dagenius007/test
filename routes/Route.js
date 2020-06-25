import { connect } from 'react-redux';
import AuthLayout from 'layouts/AuthLayout';


const Route = ({ isAuthenticated, children }) => {
	return (
		<AuthLayout>
			{children}
		</AuthLayout>
	);
};

Route.getInitialProps = async (ctx) => {
	checkServerSideCookie(ctx);
};

export default connect((state) => state, null)(Route);
