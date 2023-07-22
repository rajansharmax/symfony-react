import React, { Fragment } from "react";
import Apple from "../../components/Layouts/Apple";
import DataTable from "react-data-table-component";
import { Card } from "reactstrap";


const Permissions: React.FC = () => {
  return (
    <Apple>
      {/* <!-- Content --> */}
      <div className="container-xxl flex-grow-1 container-p-y">
          <h3>Permissions List</h3>
          <p>
            Each category (Basic, Professional, and Business) includes the four
            predefined roles shown below.
          </p>
          <Fragment>
            <Card>
              <div className="card-datatable app-user-list table-responsive">
                
              </div>
            </Card>
          </Fragment>
      </div>
      {/* <!-- / Content --> */}
    </Apple>
  );
};

export default Permissions;
