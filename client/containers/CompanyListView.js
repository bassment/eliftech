import styles from '../css/Company.css';

import React, { PropTypes } from 'react';
import CompanyListItem from '../components/CompanyListItem';
import { connect } from 'react-redux';
import * as Actions from '../actions/company';

function CompanyListView(props) {
  const companies = props.companies.map((company, i) => (
    <CompanyListItem company={company} key={i}
      onDelete={function handleDelete() {
        if (confirm('Do you want to delete this post')) { // eslint-disable-line
          props.dispatch(Actions.deletePostRequest(company));
        }
      }} />
  ));

  return (
    <div className="company-view">
      <h2 className="table-name">Companies</h2>
        <table className={styles.companyTable}>
          <thead className={styles.tableHead}>
            <tr>
              <th>Name</th>
              <th>Earnings</th>
              <th>Actions</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            { companies }
          </tbody>
        </table>
    </div>
  );
}

CompanyListView.propTypes = {
  companies: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    earnings: PropTypes.number.isRequired,
    children: this,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(CompanyListView);
