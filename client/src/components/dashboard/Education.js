import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteEducation } from '../../actions/profile';

const Education = ({ education, deleteEducation }) => {
  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td>{edu.degree}</td>
      <td>{edu.fieldofstudy}</td>
      <td>
        <Moment format='YYYY/MM/DD'>{edu.from}</Moment> -
        {edu.to === null ? (
          ' Now'
        ) : (
          <Moment format='YYYY/MM/DD'>{edu.to}</Moment>
        )}
      </td>
      <td>
        <button
          className='btn btn-danger'
          onClick={() => deleteEducation(edu.id)}
        >
          <i class='fas fa-trash-alt'></i> Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h2 className='my-2'>Education Credentials</h2>
      {education.length > 0 ? (
        <table className='table'>
          <thead>
            <tr>
              <th>School/College</th>
              <th>Degree</th>
              <th>Field of Study</th>
              <th>Timeline</th>
              <th />
            </tr>
            {educations}
          </thead>
        </table>
      ) : (
        <span>Nothing added yet!</span>
      )}
    </Fragment>
  );
};

Education.propTypes = {
  educations: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

export default connect(null, { deleteEducation })(Education);
