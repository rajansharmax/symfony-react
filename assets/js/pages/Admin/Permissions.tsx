import React, { FormEvent, Fragment, useEffect } from "react";
import Apple from "../../components/Layouts/Apple";
// import DataTable from "react-data-table-component";
import { Card } from "reactstrap";
import appAccessPermission from "../../../@scripts/js/app-access-permission";
import modalAddPermission from "../../../@scripts/js/modal-add-permission";
import modalEditPermission from "../../../@scripts/js/modal-edit-permission";



const Permissions: React.FC = () => {
  const handleSubmit = (event: FormEvent) => {
    // Prevent the form from submitting
    event.preventDefault();
    return false;
  };
  
  useEffect(() => {
     appAccessPermission();
     modalAddPermission();
     modalEditPermission();
   }, []);


  return (
    <Apple>
      {/* <!-- Content --> */}
      <div className="container-xxl flex-grow-1 container-p-y">
          <h3>Permissions List</h3>
          <p>
            Each category (Basic, Professional, and Business) includes the four
            predefined roles shown below.
          </p>
          {/* Fragment another syntax*/}
          <>
            <Card>
              <div className="card-datatable table-responsive">
                  <table className="datatables-permissions table border-top">
                    <thead>
                      <tr>
                        <th></th>
                        <th></th>
                        <th>Name</th>
                        <th>Assigned To</th>
                        <th>Created Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                  </table>
                </div>
            </Card>
            {/* <!-- Modal --> */}
              {/* <!-- Add Permission Modal --> */}
              <div className="modal fade" id="addPermissionModal" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content p-3 p-md-5">
                    <button
                      type="button"
                      className="btn-close btn-pinned"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                    <div className="modal-body">
                      <div className="text-center mb-4">
                        <h3 className="mb-2">Add New Permission</h3>
                        <p className="text-muted">Permissions you may use and assign to your users.</p>
                      </div>
                      <form id="addPermissionForm" className="row" onSubmit={handleSubmit}>
                        <div className="col-12 mb-3">
                          <label className="form-label" htmlFor="modalPermissionName">Permission Name</label>
                          <input
                            type="text"
                            id="modalPermissionName"
                            name="modalPermissionName"
                            className="form-control"
                            placeholder="Permission Name"
                            autoFocus
                          />
                        </div>
                        <div className="col-12 mb-2">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="corePermission" />
                            <label className="form-check-label" htmlFor="corePermission"> Set as core permission </label>
                          </div>
                        </div>
                        <div className="col-12 text-center demo-vertical-spacing">
                          <button type="submit" className="btn btn-primary me-sm-3 me-1">Create Permission</button>
                          <button
                            type="reset"
                            className="btn btn-label-secondary"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          >
                            Discard
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--/ Add Permission Modal --> */}

              {/* <!-- Edit Permission Modal --> */}
              <div className="modal fade" id="editPermissionModal" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content p-3 p-md-5">
                    <button
                      type="button"
                      className="btn-close btn-pinned"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                    <div className="modal-body">
                      <div className="text-center mb-4">
                        <h3 className="mb-2">Edit Permission</h3>
                        <p className="text-muted">Edit permission as per your requirements.</p>
                      </div>
                      <div className="alert alert-warning" role="alert">
                        <h6 className="alert-heading mb-2">Warning</h6>
                        <p className="mb-0">
                          By editing the permission name, you might break the system permissions functionality. Please
                          ensure you're absolutely certain before proceeding.
                        </p>
                      </div>
                      <form id="editPermissionForm" className="row" onSubmit={handleSubmit}>
                        <div className="col-sm-9">
                          <label className="form-label" htmlFor="editPermissionName">Permission Name</label>
                          <input
                            type="text"
                            id="editPermissionName"
                            name="editPermissionName"
                            className="form-control"
                            placeholder="Permission Name"
                            tabIndex={-1}
                          />
                        </div>
                        <div className="col-sm-3 mb-3">
                          <label className="form-label invisible d-none d-sm-inline-block">Button</label>
                          <button type="submit" className="btn btn-primary mt-1 mt-sm-0">Update</button>
                        </div>
                        <div className="col-12">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="editCorePermission" />
                            <label className="form-check-label" htmlFor="editCorePermission"> Set as core permission </label>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--/ Edit Permission Modal --> */}
          </>
      </div>
      {/* <!-- / Content --> */}
    </Apple>
  );
};

export default Permissions;
