import { connect } from 'react-redux';
import Layout from 'layouts/Layout';


const Route = ({ children }) => {
	return <Layout>{children}</Layout>;
};


export default connect((state) => state, null)(Route);
