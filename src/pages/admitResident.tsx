import React from 'react';
import { AdminLayout } from '@layout';
import { Accordion, Button, Dropdown, OverlayTrigger, Popover } from 'react-bootstrap';
import {LabeledDropdown, LabeledInpute} from '@components/common/LabeledInpute';

const admitResident = () => {
    return (
        <AdminLayout>
            <div className="d-flex justify-content-end pb-4">
                <button className='btn btnPrimaryOutline rounded-5 me-2'>Cancel</button>
                <button className='btn btnPrimary rounded-5 ms-2'>Save</button>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className='bg-white p-4 rounded-4 mb-2 theam-border'>
                        <h5>Resident Information</h5>
                        <Accordion defaultActiveKey={['0']} alwaysOpen className='mb-3'>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Demographic Information</Accordion.Header>
                                <Accordion.Body>
                                    <div className="row">
                                        <div className="col-6">
                                            <LabeledInpute label="Firt Name**"/>
                                            <LabeledInpute label="Last 4 SSN"/>
                                            <LabeledInpute label="Unit"/>
                                            <LabeledInpute label="Admit Date" type="date"/>
                                        </div>
                                        <div className="col-6">
                                            <LabeledInpute label="Last Name**"/>
                                            <LabeledInpute label="Date Of Birth"/>
                                            <LabeledInpute label="Room"/>
                                            <LabeledInpute type="date" label="Date Of Last IV Fluid In Hospital"/>
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion defaultActiveKey={['1']} alwaysOpen className='mt-3'>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Additional Information</Accordion.Header>
                                <Accordion.Body>
                                    <div className="row">
                                        <div className="col-6">
                                            <LabeledDropdown label="PLOF" />
                                            <LabeledDropdown label="Payor Type" />
                                            <LabeledInpute label="Facility Estimated LCD" />
                                            <LabeledInpute label="100th Day" />

                                        </div>
                                        <div className="col-6">
                                            <LabeledDropdown label="Goal" />
                                            <LabeledDropdown label="Management" />
                                            <LabeledInpute label="Days Available" />
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div className='bg-white p-3 rounded-4 mt-4'>
                        <div className="row pb-4">
                            <div className='col-9'>Did The Resident Have Major Surgery During The 30 Days Prior To Admission?</div>
                            <div className='col-3 d-flex align-items-center'>
                                <input className='me-2' type="radio" name="Admission" id="Yes" />
                                <label className='m-0 pe-4' htmlFor="Yes">Yes</label>
                                <input className='me-2' type="radio" name="Admission" id="No" />
                                <label className='m-0' htmlFor="No">No</label>
                            </div>
                        </div>
                        <Accordion defaultActiveKey={['0']} alwaysOpen className='mb-3'>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <div className="row w-100 justify-content-between align-items-center">
                                        <div className='col-8'>Major Joint replacement</div>
                                        <div className="col-4">
                                            <input className='checkBox ps-2' type="checkbox" name="" id="ifyes" />
                                            <label htmlFor='ifyes' className='check-label mb-0 ps-2'>Check if yes</label>
                                        </div>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div className="row py-2">
                                        <div className="col-2">J2400</div>
                                        <div className="col-6">Major Joint replacement (Partial/tota)</div>
                                        <div className="col-4 ps-0"><input className='checkBox ps-2' type="checkbox" name="" id="" /></div>
                                    </div>
                                    <div className="row py-2">
                                        <div className="col-2">J2400</div>
                                        <div className="col-6">Major Joint replacement (Partial/tota)</div>
                                        <div className="col-4 ps-0"><input className='checkBox ps-2' type="checkbox" name="" id="" /></div>
                                    </div>
                                    <div className="row py-2">
                                        <div className="col-2">J2400</div>
                                        <div className="col-6">Major Joint replacement (Partial/tota)</div>
                                        <div className="col-4 ps-0"><input className='checkBox ps-2' type="checkbox" name="" id="" /></div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
                <div className="col-6">
                    <div className='bg-white p-4 rounded-4 mb-2 theam-border'>
                        <h5>Diagnosis</h5>
                        <div className='diagnosis'>
                            <div className="header">Primary Diagnosis</div>
                            <div className="body">
                                <div className='py-2'>
                                    <label htmlFor="fname">I0020B Code (ICD-10)</label>
                                    <div className="d-flex align-items-center">
                                        <input type="text" />
                                        <div className='dot'></div>
                                        <input type="text" />
                                    </div>
                                </div>
                                <label className='small-lable'>Acute Respiratory failure with hypoxia - MM</label>
                            </div>
                        </div>
                        <div className='diagnosis mt-3'>
                            <div className="header">Other Diagnosis</div>
                            <div className="body">
                                <div className="row pb-2">
                                    <div className="col-4">
                                        <label htmlFor="fname">18000 Diagnosis</label>
                                        <div className='row'>
                                            <div className='col'>
                                                <input type="text" className='w-100'/>
                                            </div>
                                            <div className='col-1 my-auto p-0'>
                                                <div className='dot mx-auto'></div>
                                            </div>
                                            <div className='col'>
                                                <input type="text" className='w-100'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <label className='check-label'>Include Additional Diagnosis</label>
                                        <input className='checkBox' type="checkbox" name="" id="" />
                                    </div>
                                    <div className="col-4">
                                        <label htmlFor="fname">Additional Diagnosis</label>
                                        <div className='row'>
                                            <div className='col'>
                                                <input type="text" className='w-100'/>
                                            </div>
                                            <div className='col-1 my-auto p-0'>
                                                <div className='dot mx-auto'></div>
                                            </div>
                                            <div className='col'>
                                                <input type="text" className='w-100'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <label className='check-label'>Include 18000 Diagnosis</label>
                                        <input className='checkBox' type="checkbox" name="" id="" />
                                    </div>
                                    <div className="col small-lable">
                                        Acute Respiratory failure with hypoxia - MM
                                    </div>
                                    <div className="col small-lable">
                                        Acute Respiratory failure with hypoxia - MM
                                    </div>
                                </div>
                                <div className="row py-4">
                                    <div className="col-4">
                                        <div className='row'>
                                            <div className='col'>
                                                <input type="text" className='w-100'/>
                                            </div>
                                            <div className='col-1 my-auto p-0'>
                                                <div className='dot mx-auto'></div>
                                            </div>
                                            <div className='col'>
                                                <input type="text" className='w-100'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2 my-auto">
                                        {/* <label className='check-label'>Include Additional Diagnosis</label> */}
                                        <input className='checkBox' type="checkbox" name="" id="" />
                                    </div>
                                    <div className="col-4">
                                        <div className='row'>
                                            <div className='col'>
                                                <input type="text" className='w-100'/>
                                            </div>
                                            <div className='col-1 my-auto p-0'>
                                                <div className='dot mx-auto'></div>
                                            </div>
                                            <div className='col'>
                                                <input type="text" className='w-100'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2 my-auto">
                                        {/* <label className='check-label'>Include 18000 Diagnosis</label> */}
                                        <input className='checkBox' type="checkbox" name="" id="" />
                                    </div>
                                    <div className="col small-lable">
                                        Acute Respiratory failure with hypoxia - MM
                                    </div>
                                    <div className="col small-lable">
                                        Acute Respiratory failure with hypoxia - MM
                                    </div>
                                </div>
                                <div className="row py-4">
                                    <div className="col-4">
                                        <div className='row'>
                                            <div className='col'>
                                                <input type="text" className='w-100'/>
                                            </div>
                                            <div className='col-1 my-auto p-0'>
                                                <div className='dot mx-auto'></div>
                                            </div>
                                            <div className='col'>
                                                <input type="text" className='w-100'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2 my-auto">
                                        {/* <label className='check-label'>Include Additional Diagnosis</label> */}
                                        <input className='checkBox' type="checkbox" name="" id="" />
                                    </div>
                                    <div className="col-4">
                                        <div className='row'>
                                            <div className='col'>
                                                <input type="text" className='w-100'/>
                                            </div>
                                            <div className='col-1 my-auto p-0'>
                                                <div className='dot mx-auto'></div>
                                            </div>
                                            <div className='col'>
                                                <input type="text" className='w-100'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2 my-auto">
                                        {/* <label className='check-label'>Include 18000 Diagnosis</label> */}
                                        <input className='checkBox' type="checkbox" name="" id="" />
                                    </div>
                                    <div className="col small-lable">
                                        Acute Respiratory failure with hypoxia - MM
                                    </div>
                                    <div className="col small-lable">
                                        Acute Respiratory failure with hypoxia - MM
                                    </div>
                                </div>
                                <div className="row py-4">
                                    <div className="col-4">
                                        <div className='row'>
                                            <div className='col'>
                                                <input type="text" className='w-100'/>
                                            </div>
                                            <div className='col-1 my-auto p-0'>
                                                <div className='dot mx-auto'></div>
                                            </div>
                                            <div className='col'>
                                                <input type="text" className='w-100'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2 my-auto">
                                        {/* <label className='check-label'>Include Additional Diagnosis</label> */}
                                        <input className='checkBox' type="checkbox" name="" id="" />
                                    </div>
                                    <div className="col-4">
                                        <div className='row'>
                                            <div className='col'>
                                                <input type="text" className='w-100'/>
                                            </div>
                                            <div className='col-1 my-auto p-0'>
                                                <div className='dot mx-auto'></div>
                                            </div>
                                            <div className='col'>
                                                <input type="text" className='w-100'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2 my-auto">
                                        {/* <label className='check-label'>Include 18000 Diagnosis</label> */}
                                        <input className='checkBox' type="checkbox" name="" id="" />
                                    </div>
                                    <div className="col small-lable">
                                        Acute Respiratory failure with hypoxia - MM
                                    </div>
                                    <div className="col small-lable">
                                        Acute Respiratory failure with hypoxia - MM
                                    </div>
                                </div>
                                <div className="row py-4">
                                    <div className="col-4">
                                        <div className='row'>
                                            <div className='col'>
                                                <input type="text" className='w-100'/>
                                            </div>
                                            <div className='col-1 my-auto p-0'>
                                                <div className='dot mx-auto'></div>
                                            </div>
                                            <div className='col'>
                                                <input type="text" className='w-100'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2 my-auto">
                                        {/* <label className='check-label'>Include Additional Diagnosis</label> */}
                                        <input className='checkBox' type="checkbox" name="" id="" />
                                    </div>
                                    <div className="col-4">
                                        <div className='row'>
                                            <div className='col'>
                                                <input type="text" className='w-100'/>
                                            </div>
                                            <div className='col-1 my-auto p-0'>
                                                <div className='dot mx-auto'></div>
                                            </div>
                                            <div className='col'>
                                                <input type="text" className='w-100'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2 my-auto">
                                        {/* <label className='check-label'>Include 18000 Diagnosis</label> */}
                                        <input className='checkBox' type="checkbox" name="" id="" />
                                    </div>
                                    <div className="col small-lable">
                                        Acute Respiratory failure with hypoxia - MM
                                    </div>
                                    <div className="col small-lable">
                                        Acute Respiratory failure with hypoxia - MM
                                    </div>
                                </div>
                                <div className="row py-4">
                                    <div className="col-4">
                                        <div className='row'>
                                            <div className='col'>
                                                <input type="text" className='w-100'/>
                                            </div>
                                            <div className='col-1 my-auto p-0'>
                                                <div className='dot mx-auto'></div>
                                            </div>
                                            <div className='col'>
                                                <input type="text" className='w-100'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2 my-auto">
                                        {/* <label className='check-label'>Include Additional Diagnosis</label> */}
                                        <input className='checkBox' type="checkbox" name="" id="" />
                                    </div>
                                    <div className="col-4">
                                        <div className='row'>
                                            <div className='col'>
                                                <input type="text" className='w-100'/>
                                            </div>
                                            <div className='col-1 my-auto p-0'>
                                                <div className='dot mx-auto'></div>
                                            </div>
                                            <div className='col'>
                                                <input type="text" className='w-100'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2 my-auto">
                                        {/* <label className='check-label'>Include 18000 Diagnosis</label> */}
                                        <input className='checkBox' type="checkbox" name="" id="" />
                                    </div>
                                    <div className="col small-lable">
                                        Acute Respiratory failure with hypoxia - MM
                                    </div>
                                    <div className="col small-lable">
                                        Acute Respiratory failure with hypoxia - MM
                                    </div>
                                </div>
                                <div className="row py-4">
                                    <div className="col-4">
                                        <div className='row'>
                                            <div className='col'>
                                                <input type="text" className='w-100'/>
                                            </div>
                                            <div className='col-1 my-auto p-0'>
                                                <div className='dot mx-auto'></div>
                                            </div>
                                            <div className='col'>
                                                <input type="text" className='w-100'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2 my-auto">
                                        {/* <label className='check-label'>Include Additional Diagnosis</label> */}
                                        <input className='checkBox' type="checkbox" name="" id="" />
                                    </div>
                                    <div className="col-4">
                                        <div className='row'>
                                            <div className='col'>
                                                <input type="text" className='w-100'/>
                                            </div>
                                            <div className='col-1 my-auto p-0'>
                                                <div className='dot mx-auto'></div>
                                            </div>
                                            <div className='col'>
                                                <input type="text" className='w-100'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2 my-auto">
                                        {/* <label className='check-label'>Include 18000 Diagnosis</label> */}
                                        <input className='checkBox' type="checkbox" name="" id="" />
                                    </div>
                                    <div className="col small-lable">
                                        Acute Respiratory failure with hypoxia - MM
                                    </div>
                                    <div className="col small-lable">
                                        Acute Respiratory failure with hypoxia - MM
                                    </div>
                                </div>
                                <div className="row py-4">
                                    <div className="col-4">
                                        <div className='row'>
                                            <div className='col'>
                                                <input type="text" className='w-100'/>
                                            </div>
                                            <div className='col-1 my-auto p-0'>
                                                <div className='dot mx-auto'></div>
                                            </div>
                                            <div className='col'>
                                                <input type="text" className='w-100'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2 my-auto">
                                        {/* <label className='check-label'>Include Additional Diagnosis</label> */}
                                        <input className='checkBox' type="checkbox" name="" id="" />
                                    </div>
                                    <div className="col-4">
                                        <div className='row'>
                                            <div className='col'>
                                                <input type="text" className='w-100'/>
                                            </div>
                                            <div className='col-1 my-auto p-0'>
                                                <div className='dot mx-auto'></div>
                                            </div>
                                            <div className='col'>
                                                <input type="text" className='w-100'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2 my-auto">
                                        {/* <label className='check-label'>Include 18000 Diagnosis</label> */}
                                        <input className='checkBox' type="checkbox" name="" id="" />
                                    </div>
                                    <div className="col small-lable">
                                        Acute Respiratory failure with hypoxia - MM
                                    </div>
                                    <div className="col small-lable">
                                        Acute Respiratory failure with hypoxia - MM
                                    </div>
                                </div>
                                <div className="row py-4">
                                    <div className="col-4">
                                        <div className='row'>
                                            <div className='col'>
                                                <input type="text" className='w-100'/>
                                            </div>
                                            <div className='col-1 my-auto p-0'>
                                                <div className='dot mx-auto'></div>
                                            </div>
                                            <div className='col'>
                                                <input type="text" className='w-100'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2 my-auto">
                                        {/* <label className='check-label'>Include Additional Diagnosis</label> */}
                                        <input className='checkBox' type="checkbox" name="" id="" />
                                    </div>
                                    <div className="col-4">
                                        <div className='row'>
                                            <div className='col'>
                                                <input type="text" className='w-100'/>
                                            </div>
                                            <div className='col-1 my-auto p-0'>
                                                <div className='dot mx-auto'></div>
                                            </div>
                                            <div className='col'>
                                                <input type="text" className='w-100'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2 my-auto">
                                        {/* <label className='check-label'>Include 18000 Diagnosis</label> */}
                                        <input className='checkBox' type="checkbox" name="" id="" />
                                    </div>
                                    <div className="col small-lable">
                                        Acute Respiratory failure with hypoxia - MM
                                    </div>
                                    <div className="col small-lable">
                                        Acute Respiratory failure with hypoxia - MM
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

export default admitResident