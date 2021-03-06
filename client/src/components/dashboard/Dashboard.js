import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import { Link } from 'react-router-dom';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import Alert from '../layout/Alert';

const Dashboard = (props) => {
  useEffect(() => {
    props.getCurrentProfile();
  }, []);

  return (
    <Fragment>
      <Alert />
      <h1 className='large text-primary'>
        {' '}
        <i class='fas fa-clipboard-list'></i> Dashboard{' '}
      </h1>

      <p className='lead'>
        <i className='fas fa-user' /> Welcome,{' '}
        {props.auth.user && <i>{props.auth.user.name}</i>}
      </p>

      {!props.profile.loading &&
        (props.profile.profile !== null ? (
          <Fragment>
            <DashboardActions />
            <Experience experience={props.profile.profile.experience} />
            <Education education={props.profile.profile.education} />
          </Fragment>
        ) : (
          <div>
            <p>You haven't added a profile yet.</p>
            <Link to='/create-profile' className='btn btn-primary my-1'>
              {' '}
              Create Profile{' '}
            </Link>
          </div>
        ))}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
