import React, { Component } from 'react'

const Modal = ({ modalAction }) => {
   return(
        <div className="modal fade" id="appModal"  role="dialog" aria-labelledby="appModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="appModalLabel">Are you sure you want to perform this action?</h5>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-primary" onClick={modalAction}>Submit</button>
                </div>
                </div>
            </div>
        </div>
   )
}

export default Modal;



