import React from "react";

import { GiBank } from "react-icons/gi";
import { MdLocalLibrary, MdSportsBaseball, MdFastfood } from "react-icons/md";
import { FaMale, FaFemale } from "react-icons/fa";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Button from "react-bootstrap/Button";

const CollegeFacilities = ({ collegeData }) => {
  return (
    <div>
      <div id="facilities" className="mt-4 mb-4">
        <h3 className="text-center mt-4 mb-4">Campus Facilities</h3>

        <div className="row text-center justify-content-center">
          {/*--------------- BANK -----------*/}
          {collegeData.bank && (
            <div className="col-1">
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="button-tooltip-2">Bank</Tooltip>}
              >
                {({ ref, ...triggerHandler }) => (
                  <Button
                    variant="light"
                    {...triggerHandler}
                    ref={ref}
                    className="d-inline-flex align-items-center"
                  >
                    <span className="ms-1">
                      <GiBank className="campus-facilities-logo" size={70} />
                    </span>
                  </Button>
                )}
              </OverlayTrigger>
            </div>
          )}

          {/*--------------- LIBRARY -----------*/}
          {collegeData.library && (
            <div className="col-1">
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="button-tooltip-2">Library</Tooltip>}
              >
                {({ ref, ...triggerHandler }) => (
                  <Button
                    variant="light"
                    {...triggerHandler}
                    ref={ref}
                    className="d-inline-flex align-items-center"
                  >
                    <span className="ms-1">
                      <MdLocalLibrary
                        className="campus-facilities-logo"
                        size={70}
                      />
                    </span>
                  </Button>
                )}
              </OverlayTrigger>
            </div>
          )}

          {/*--------------- CANTEEN -----------*/}
          {collegeData.canteen && (
            <div className="col-1">
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="button-tooltip-2">Canteen</Tooltip>}
              >
                {({ ref, ...triggerHandler }) => (
                  <Button
                    variant="light"
                    {...triggerHandler}
                    ref={ref}
                    className="d-inline-flex align-items-center"
                  >
                    <span className="ms-1">
                      <MdFastfood
                        className="campus-facilities-logo"
                        size={70}
                      />
                    </span>
                  </Button>
                )}
              </OverlayTrigger>
            </div>
          )}

          {/*--------------- Boys Hostel -----------*/}
          {collegeData.boysHostel && (
            <div className="col-1">
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="button-tooltip-2">Boys Hostel</Tooltip>}
              >
                {({ ref, ...triggerHandler }) => (
                  <Button
                    variant="light"
                    {...triggerHandler}
                    ref={ref}
                    className="d-inline-flex align-items-center"
                  >
                    <span className="ms-1">
                      <FaMale className="campus-facilities-logo" size={70} />
                    </span>
                  </Button>
                )}
              </OverlayTrigger>
            </div>
          )}

          {/*--------------- Girls Hostel -----------*/}
          {collegeData.girlsHostel && (
            <div className="col-1">
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="button-tooltip-2">Girls Hostel</Tooltip>}
              >
                {({ ref, ...triggerHandler }) => (
                  <Button
                    variant="light"
                    {...triggerHandler}
                    ref={ref}
                    className="d-inline-flex align-items-center"
                  >
                    <span className="ms-1">
                      <FaFemale className="campus-facilities-logo" size={70} />
                    </span>
                  </Button>
                )}
              </OverlayTrigger>
            </div>
          )}

          {/*--------------- Sports -----------*/}
          {collegeData.sports && (
            <div className="col-1">
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="button-tooltip-2">Sports</Tooltip>}
              >
                {({ ref, ...triggerHandler }) => (
                  <Button
                    variant="light"
                    {...triggerHandler}
                    ref={ref}
                    className="d-inline-flex align-items-center"
                  >
                    <span className="ms-1">
                      <MdSportsBaseball
                        className="campus-facilities-logo"
                        size={70}
                      />
                    </span>
                  </Button>
                )}
              </OverlayTrigger>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollegeFacilities;
