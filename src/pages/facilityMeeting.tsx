import LCDModal from '@components/common/LCDModal'
import QuickCalculations from '@components/common/QuickCalculations'
import SkipDay from '@components/common/SkipDay'
import History from '@components/common/History'
import { AdminLayout } from '@layout'
import React, { useState } from 'react'
import { Accordion, OverlayTrigger, Popover } from 'react-bootstrap'

const facilityMeeting = () => {
    const [isViewShort, setisViewShort] = useState(false)

    // ------------------------------dummy Quick Calculations---
    const QuickCalculation = (
        <Popover id="popover-basic" className='bg-body CustomCard'>
            <Popover.Body>
                <QuickCalculations />
            </Popover.Body>
        </Popover>

    )
    //  end Quick Calculations--------------------- 
    // ------------------------------dummy LCD---
    const LCD = (
        <Popover id="popover-basic" className='bg-body CustomCard'>
            <Popover.Body>
                <LCDModal />
            </Popover.Body>
        </Popover>

    )
    //  end Quick Calculations--------------------- 
    // ------------------------------dummy LCD---
    const Historys = (
        <Popover id="popover-basic" className='bg-body CustomCard'>
            <Popover.Body>
                <History />
            </Popover.Body>
        </Popover>

    )
    //  end Quick Calculations--------------------- 
    // ------------------------------dummy LCD---
    const SkipDays = (
        <Popover id="popover-basic" className='bg-white CustomCard'>
            <Popover.Body>
                <SkipDay />
            </Popover.Body>
        </Popover>

    )
    //  end Quick Calculations--------------------- 

    return (
        <AdminLayout>
            <button className='btn btnPrimary attendance'>
                <span>A</span>
                <span>t</span>
                <span>t</span>
                <span>e</span>
                <span>n</span>
                <span>d</span>
                <span>a</span>
                <span>n</span>
                <span>c</span>
                <span>e</span>
            </button>
            <div className='px-4 facilityMeeting'>
                <div className='row m-0'>
                    <div className="col-4 my-auto fw-bold h5">Dashboard / New Meeting</div>
                    <div className='col-8 text-end pe-0'>
                        <span className="ps-2 mx-2"> <span className='fw-bold'>6</span> Of <span className='fw-bold'>100</span> Residents</span>
                        <span className="ps-2 mx-2"> Select Resident</span>
                        <select name="" id="" className='rounded-5 py-1 mx-2 px-2'>
                            <option value="1">James John</option>
                            <option value="2">Lames John</option>
                            <option value="3">Dames John</option>
                        </select>
                        <button className="btn btnPrimaryOutline bg-white rounded-5 mx-2">
                            Previous
                        </button>
                        <button className="btn btnPrimaryOutline bg-white rounded-5 mx-2">
                            Skip
                        </button>
                        <button className="btn btnPrimary rounded-5 mx-2">
                            Next
                        </button>
                        <button className='btn btnWarning rounded-5 ms-2'>
                            New Resident
                        </button>

                    </div>

                </div>
                {/* -------start profile--------------------------------------                     */}
                <div >
                    <div className='roundedTop row mt-3 m-0 user-meeting-header'>
                        <div className='borderEnd col-2 my-auto px-4'>
                            <div className='text-end'>
                                <img className='pointer' src="/Icons/Edit_IC.png" alt="pencil" />
                            </div>
                            <p className='fontStyle m-0 text-white'>John Roy </p>
                        </div>
                        <div className='col-7 borderEnd text-white my-auto'>
                            <div className='row'>
                                <div className='col my-auto'>
                                    <p className='label'>Admitted On</p>
                                    <p className='mb-0'>16/04/2023</p>
                                </div>
                                <div className='col my-auto'>
                                    <p className='label'>Room</p>
                                    <p className='mb-0'>D-304</p>
                                </div>
                                <div className='col my-auto'>
                                    <p className='label'>Last IVF</p>
                                    <p className='mb-0'>08/04/2023</p>
                                </div>
                                <div className='col my-auto'>
                                    <p className='label'>PLOF</p>
                                    <p className='mb-0'>LTC</p>
                                </div>
                                <div className='col my-auto'>
                                    <p className='label'>Goal</p>
                                    <p className='mb-0'>LTC</p>
                                </div>
                                <div className='col my-auto'>
                                    <p className='label'>Insurance</p>
                                    <p className='mb-0'>Medicare</p>
                                </div>
                                <div className='col my-auto'>
                                    <p className='label'>Meeting Type</p>
                                    <p className='mb-0'>LCD</p>
                                </div>
                                <div className='col my-auto'>
                                    <p className='label'>Payor Type</p>
                                    <p className='mb-0 text-nowrap'>Medicare-A</p>
                                </div>
                                <div className='col my-auto'>
                                    <p className='label'>Days Avail</p>
                                    <p className='mb-0'>16/09/2023</p>
                                </div>
                                <div className='col my-auto'>
                                    <p className='label'>100th Date</p>
                                    <p className='mb-0'>16/09/2023</p>
                                </div>
                                <div className='col my-auto'>
                                    <p className='label'>Last Meeting Date</p>
                                    <p className='mb-0'>10/09/2023</p>
                                </div>


                            </div>

                        </div>
                        <div className='col my-auto'>
                            <p className='label'>Primary Diagnosis (Acute Respiratory failure with hypoxia - MM)</p>
                            <span className='bg-gr-color border-box mb-0'>R13.10 Dysphagia, Unspecified RTP</span>

                        </div>


                    </div>

                    {/* ------------------------------endProfile ------------------- */}
                    <div className='borderColor p-3'>
                        <div className='row'>
                            <div className='col-8 mt-auto'>
                                <button className='fw-bold pb-2 tabstyle act-tab'>Current Meeting</button>
                                {/* ------ Quick Calculations */}
                                <OverlayTrigger trigger="focus" placement="bottom" overlay={QuickCalculation}>
                                    <button className='mx-3 tabstyle'>Quick Calculation</button>
                                </OverlayTrigger>
                                {/* end Quick Calculations */}
                                {/* ------ Quick Calculations */}
                                <OverlayTrigger trigger="focus" placement="bottom" overlay={LCD}>
                                    <button className='mx-3 tabstyle'>LCD</button>
                                </OverlayTrigger>
                                {/* end Quick Calculations */}
                                {/* ------Skick Days Calculations */}
                                <OverlayTrigger trigger="focus" placement="bottom" overlay={SkipDays}>
                                    <button className='mx-3 tabstyle'>Skip Days</button>
                                </OverlayTrigger>
                                {/* end Skick Days Calculations */}
                                {/* ------ History Calculations */}
                                <OverlayTrigger trigger="focus" placement="bottom" overlay={Historys}>
                                    <button className='mx-3 tabstyle'>History</button>
                                </OverlayTrigger>
                            </div>
                            <div className='col-4 text-end mb-2'>
                                <button className={`${!isViewShort ? 'btnPrimaryOutline':'btnPrimary'} ${" btn rounded-5 mx-2"} `} onClick={()=> setisViewShort(!isViewShort)}>
                                    Chanage View
                                </button>
                                <button className="btn btnPrimaryOutline rounded-5 mx-2">
                                    Update
                                </button>
                                <button className='btn btnPrimary rounded-5 ms-2'>
                                    Save & Next
                                </button>
                            </div>
                        </div>
                        <div className="current-meeting">
                            <table className='meeting-table'>
                                <tbody>
                                    <tr>
                                        <th>Visits View</th>
                                        <th>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td className="text-start">Visit #1 06/10/2023</td>
                                                        <td>
                                                            <img src="/assets/img/icons/Previous_IC.svg" alt="" />
                                                        </td>
                                                        <td>
                                                            <select className='select-custome' name="" id="">
                                                                <option value="">Previous</option>
                                                                <option value="">Previous</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            <img src="/assets/img/icons/Next_IC.svg" alt="" />
                                                        </td>
                                                        <td className='text-start'>
                                                            <div className='v-type'>Visit Type</div>
                                                            <select className='select-custome' name="" id="">
                                                                <option value="">Meeting</option>
                                                                <option value="">Meeting</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </th>
                                        <th>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td className="text-start">Visit #1 06/10/2023</td>
                                                        <td>
                                                            <select className='select-custome' name="" id="">
                                                                <option value="">Current</option>
                                                                <option value="">Current</option>
                                                            </select>
                                                        </td>
                                                        <td className='text-start'>
                                                            <div className='v-type'>Visit Type</div>
                                                            <select className='select-custome' name="" id="">
                                                                <option value="">Meeting</option>
                                                                <option value="">Meeting</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            <img src="/assets/img/icons/Unlock.svg" alt="" />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </th>
                                        <th>18000 Diagnosis</th>
                                        <th>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span>Additional Diagnosis</span>
                                                <img className={`${isViewShort ? 'view-arrow-down':'view-arrow-up'} pointer`} src="/assets/img/icons/Next_IC.svg" alt="" onClick={()=> setisViewShort(!isViewShort)} />
                                            </div>
                                        </th>
                                    </tr>
                                    {!isViewShort ?
                                        <>
                                            <tr>
                                                <td></td>
                                                <td>
                                                    <table className='inner-table'>
                                                        <tbody>
                                                            <tr>
                                                                <td>ARD</td>
                                                                <td>PT/OT CMI</td>
                                                                <td>ST CMI</td>
                                                                <td>Nursing</td>
                                                                <td>NTA</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                                <td>
                                                    <table className='inner-table'>
                                                        <tbody>
                                                            <tr>
                                                                <td>ARD</td>
                                                                <td>PT/OT CMI</td>
                                                                <td>ST CMI</td>
                                                                <td>Nursing</td>
                                                                <td>NTA</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                                <td rowSpan={5} className='py-2 pe-0'>
                                                    <div className='dignosis-list'>
                                                        <ul className='px-3 m-0'>
                                                            <li>R13.10 Dysphagia, Unspecified RTP</li>
                                                            <li>R62.7 Adult Failure To Thrive RTP</li>
                                                            <li>148.20 Chronic Atrial Fibrillation, Unspecified - MM</li>
                                                            <li>R91.8 Other Nonspecific Abnormal Finding Of Lung Fi...</li>
                                                            <li>144.39 Other Atrioventricular Block - MM</li>
                                                            <li>R13.10 Dysphagia, Unspecified RTP</li>
                                                            <li>R62.7 Adult Failure To Thrive RTP</li>
                                                        </ul>
                                                    </div>
                                                </td>
                                                <td rowSpan={5} className='py-2 pe-0'>
                                                    <div className='dignosis-list'>
                                                        <ul className='px-3 m-0'>
                                                            <li>R13.10 Dysphagia, Unspecified RTP</li>
                                                            <li>R62.7 Adult Failure To Thrive RTP</li>
                                                            <li>148.20 Chronic Atrial Fibrillation, Unspecified - MM</li>
                                                            <li>R91.8 Other Nonspecific Abnormal Finding Of Lung Fi...</li>
                                                            <li>144.39 Other Atrioventricular Block - MM</li>
                                                            <li>R13.10 Dysphagia, Unspecified RTP</li>
                                                            <li>R62.7 Adult Failure To Thrive RTP</li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>
                                                    <table className='inner-table'>
                                                        <tbody>
                                                            <tr>
                                                                <td>TM - SD - PDE1 - NE</td>
                                                                <td>SD</td>
                                                                <td>SD</td>
                                                                <td>PDE1</td>
                                                                <td>NE</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                                <td>
                                                    <table className='inner-table'>
                                                        <tbody>
                                                            <tr>
                                                                <td>TM - SD - PDE1 - NE</td>
                                                                <td>SD</td>
                                                                <td>SD</td>
                                                                <td>PDE1</td>
                                                                <td>NE</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Last Payment Indicator</td>
                                                <td>
                                                    <table className='inner-table'>
                                                        <tbody>
                                                            <tr>
                                                                <td>M - D - U - E</td>
                                                                <td>D</td>
                                                                <td>D</td>
                                                                <td>U</td>
                                                                <td>E</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                                <td>
                                                    <table className='inner-table'>
                                                        <tbody>
                                                            <tr>
                                                                <td>M - D - U - E</td>
                                                                <td>D</td>
                                                                <td>D</td>
                                                                <td>U</td>
                                                                <td>E</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>06/10/2023</td>
                                                <td>
                                                    <table className='inner-table'>
                                                        <tbody>
                                                            <tr>
                                                                <td className='fw-bold'>$ 511.04</td>
                                                                <td className='fw-bold'>$ 33.11</td>
                                                                <td className='fw-bold'>$ 33.11</td>
                                                                <td className='fw-bold'>$ 155.70</td>
                                                                <td className='fw-bold'>$ 76.71</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                                <td>
                                                    <table className='inner-table'>
                                                        <tbody>
                                                            <tr>
                                                                <td className='fw-bold'>$ 511.04</td>
                                                                <td className='fw-bold'>$ 33.11</td>
                                                                <td className='fw-bold'>$ 33.11</td>
                                                                <td className='fw-bold'>$ 155.70</td>
                                                                <td className='fw-bold'>$ 76.71</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='fw-bold'>Federal Total Rate</td>
                                                <td>
                                                    <table className='inner-table'>
                                                        <tbody>
                                                            <tr>
                                                                <td className='fw-bold'>$ 94.84</td>
                                                                <td>1</td>
                                                                <td>1</td>
                                                                <td>0</td>
                                                                <td>1</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                                <td>
                                                    <table className='inner-table'>
                                                        <tbody>
                                                            <tr>
                                                                <td className='fw-bold'>$ 94.84</td>
                                                                <td>1</td>
                                                                <td>1</td>
                                                                <td>0</td>
                                                                <td>1</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </>
                                    :
                                        <tr>
                                            <td></td>
                                            <td>
                                                <table className='inner-table'>
                                                    <tbody>
                                                        <tr>
                                                            <td>ARD</td>
                                                            <td>PT/OT CMI</td>
                                                            <td>ST CMI</td>
                                                            <td>Nursing</td>
                                                            <td>NTA</td>
                                                        </tr>
                                                        <tr>
                                                            <td className='fw-bold'>$ 511.04</td>
                                                            <td className='fw-bold'>$ 33.11</td>
                                                            <td className='fw-bold'>$ 33.11</td>
                                                            <td className='fw-bold'>$ 155.70</td>
                                                            <td className='fw-bold'>$ 76.71</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td>
                                                <table className='inner-table'>
                                                    <tbody>
                                                        <tr>
                                                            <td>ARD</td>
                                                            <td>PT/OT CMI</td>
                                                            <td>ST CMI</td>
                                                            <td>Nursing</td>
                                                            <td>NTA</td>
                                                        </tr>
                                                        <tr>
                                                            <td className='fw-bold'>$ 511.04</td>
                                                            <td className='fw-bold'>$ 33.11</td>
                                                            <td className='fw-bold'>$ 33.11</td>
                                                            <td className='fw-bold'>$ 155.70</td>
                                                            <td className='fw-bold'>$ 76.71</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td className='p-1'>
                                                <ul className='ps-4 m-0'><li>R13.10 Dysphagia, Unspecified RTP</li></ul>
                                            </td>
                                            <td className='p-1'>
                                                <ul className='ps-4 m-0'><li>R13.10 Dysphagia, Unspecified RTP</li></ul>
                                            </td>
                                        </tr> 
                                    }
                                     {/* short view end */}
                                </tbody>
                            </table>

                        </div>

                    </div>
                    <div className='other-facilities'>
                        <div className="row">
                            <div className="col-2">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>Nursing Care</th>
                                            <th>Values</th>
                                        </tr>
                                        <tr>
                                            <td>Trach.(1)(S)</td>
                                            <td><input type="text" placeholder='Enter Text'/></td>
                                        </tr>
                                        <tr>
                                            <td>Vent(4)(S)</td>
                                            <td><input type="text" placeholder='Enter Text'/></td>
                                        </tr>
                                        <tr>
                                            <td>Gtube(1)</td>
                                            <td><input type="text" placeholder='Enter Text'/></td>
                                        </tr>
                                        <tr>
                                            <td>Dialysis</td>
                                            <td><input type="text" placeholder='Enter Text'/></td>
                                        </tr>
                                        <tr>
                                            <td>TBI(S)</td>
                                            <td><input type="text" placeholder='Enter Text'/></td>
                                        </tr>
                                        <tr>
                                            <td>DM(2)</td>
                                            <td><input type="text" placeholder='Enter Text'/></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-2">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th className='w-50'>Nursing Care</th>
                                            <th className='w-50'>Values</th>
                                        </tr>
                                        <tr>
                                            <td>Trach.(1)(S)</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                        <tr>
                                            <td>Vent(4)(S)</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                        <tr>
                                            <td>Gtube(1)</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                        <tr>
                                            <td>Dialysis</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                        <tr>
                                            <td>TBI(S)</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                        <tr>
                                            <td>DM(2)</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                        <tr>
                                            <td>Gtube(1)</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                        <tr>
                                            <td>Dialysis</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-2">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>Nursing Care</th>
                                            <th>Values</th>
                                        </tr>
                                        <tr>
                                            <td>Trach.(1)(S)</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                        <tr>
                                            <td>Vent(4)(S)</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                        <tr>
                                            <td>Gtube(1)</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                        <tr>
                                            <td>Dialysis</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                        <tr>
                                            <td>TBI(S)</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                        <tr>
                                            <td>DM(2)</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table className='mt-3'>
                                    <tbody>
                                        <tr>
                                            <th>Nursing Care</th>
                                            <th>Values</th>
                                        </tr>
                                        <tr>
                                            <td>Trach.(1)(S)</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                        <tr>
                                            <td>Vent(4)(S)</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                        <tr>
                                            <td>Gtube(1)</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                        <tr>
                                            <td>Dialysis</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                        <tr>
                                            <td>TBI(S)</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                        <tr>
                                            <td>DM(2)</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-2">
                            <table>
                                    <tbody>
                                        <tr>
                                            <th className='w-50'>Nursing Care</th>
                                            <th className='w-50'>Values</th>
                                        </tr>
                                        <tr>
                                            <td>Trach.(1)(S)</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                        <tr>
                                            <td>Vent(4)(S)</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                        <tr>
                                            <td>Gtube(1)</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                        <tr>
                                            <td>Dialysis</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                        <tr>
                                            <td>TBI(S)</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                        <tr>
                                            <td>DM(2)</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                        <tr>
                                            <td>Gtube(1)</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                        <tr>
                                            <td>Dialysis</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-2">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>Nursing Care</th>
                                            <th>Values</th>
                                        </tr>
                                        <tr>
                                            <td>Trach.(1)(S)</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                        <tr>
                                            <td>Vent(4)(S)</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                        <tr>
                                            <td>Gtube(1)</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                        <tr>
                                            <td>Dialysis</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                        <tr>
                                            <td>TBI(S)</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                        <tr>
                                            <td>DM(2)</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table className='mt-3'>
                                    <tbody>
                                        <tr>
                                            <th>Nursing Care</th>
                                            <th>Values</th>
                                        </tr>
                                        <tr>
                                            <td>Trach.(1)(S)</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                        <tr>
                                            <td>Vent(4)(S)</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                        <tr>
                                            <td>Gtube(1)</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                        <tr>
                                            <td>Dialysis</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                        <tr>
                                            <td>TBI(S)</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                        <tr>
                                            <td>DM(2)</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-2">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>Nursing Care</th>
                                            <th>Values</th>
                                        </tr>
                                        <tr>
                                            <td>Trach.(1)(S)</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                        <tr>
                                            <td>Vent(4)(S)</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                        <tr>
                                            <td>Gtube(1)</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                        <tr>
                                            <td>Dialysis</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                        <tr>
                                            <td>TBI(S)</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                        <tr>
                                            <td>DM(2)</td>
                                            <td><input type="text" placeholder='Enter Text' /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-4">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th colSpan={4}>Weekly Notes</th>
                                        </tr>
                                        <tr>
                                            <td className='text-center'>1</td>
                                            <td>
                                                <select placeholder='Type and select' name="" id="">
                                                    <option value="">Type and select</option>
                                                    <option value=""></option>
                                                </select>
                                            </td>
                                            <td>
                                                <select placeholder='Perssit' name="" id="">
                                                    <option value="">Perssit</option>
                                                    <option value=""></option>
                                                </select>
                                            </td>
                                            <td>
                                                <select placeholder='Include In' name="" id="">
                                                    <option value="">Include In</option>
                                                    <option value=""></option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='text-center'>2</td>
                                            <td>
                                                <select placeholder='Type and select' name="" id="">
                                                    <option value="">Type and select</option>
                                                    <option value=""></option>
                                                </select>
                                            </td>
                                            <td>
                                                <select placeholder='Perssit' name="" id="">
                                                    <option value="">Perssit</option>
                                                    <option value=""></option>
                                                </select>
                                            </td>
                                            <td>
                                                <select placeholder='Include In' name="" id="">
                                                    <option value="">Include In</option>
                                                    <option value=""></option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='text-center'>3</td>
                                            <td>
                                                <select placeholder='Type and select' name="" id="">
                                                    <option value="">Type and select</option>
                                                    <option value=""></option>
                                                </select>
                                            </td>
                                            <td>
                                                <select placeholder='Perssit' name="" id="">
                                                    <option value="">Perssit</option>
                                                    <option value=""></option>
                                                </select>
                                            </td>
                                            <td>
                                                <select placeholder='Include In' name="" id="">
                                                    <option value="">Include In</option>
                                                    <option value=""></option>
                                                </select>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-4">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th colSpan={4}>Weekly Notes</th>
                                        </tr>
                                        <tr>
                                            <td className='text-center'>1</td>
                                            <td>
                                                <select placeholder='Type and select' name="" id="">
                                                    <option value="">Type and select</option>
                                                    <option value=""></option>
                                                </select>
                                            </td>
                                            <td>
                                                <select placeholder='Perssit' name="" id="">
                                                    <option value="">Perssit</option>
                                                    <option value=""></option>
                                                </select>
                                            </td>
                                            <td>
                                                <select placeholder='Include In' name="" id="">
                                                    <option value="">Include In</option>
                                                    <option value=""></option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='text-center'>2</td>
                                            <td>
                                                <select placeholder='Type and select' name="" id="">
                                                    <option value="">Type and select</option>
                                                    <option value=""></option>
                                                </select>
                                            </td>
                                            <td>
                                                <select placeholder='Perssit' name="" id="">
                                                    <option value="">Perssit</option>
                                                    <option value=""></option>
                                                </select>
                                            </td>
                                            <td>
                                                <select placeholder='Include In' name="" id="">
                                                    <option value="">Include In</option>
                                                    <option value=""></option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='text-center'>3</td>
                                            <td>
                                                <select placeholder='Type and select' name="" id="">
                                                    <option value="">Type and select</option>
                                                    <option value=""></option>
                                                </select>
                                            </td>
                                            <td>
                                                <select placeholder='Perssit' name="" id="">
                                                    <option value="">Perssit</option>
                                                    <option value=""></option>
                                                </select>
                                            </td>
                                            <td>
                                                <select placeholder='Include In' name="" id="">
                                                    <option value="">Include In</option>
                                                    <option value=""></option>
                                                </select>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-4">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th colSpan={4}>Weekly Notes</th>
                                        </tr>
                                        <tr>
                                            <td className='text-center'>1</td>
                                            <td>
                                                <select placeholder='Type and select' name="" id="">
                                                    <option value="">Type and select</option>
                                                    <option value=""></option>
                                                </select>
                                            </td>
                                            <td>
                                                <select placeholder='Perssit' name="" id="">
                                                    <option value="">Perssit</option>
                                                    <option value=""></option>
                                                </select>
                                            </td>
                                            <td>
                                                <select placeholder='Include In' name="" id="">
                                                    <option value="">Include In</option>
                                                    <option value=""></option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='text-center'>2</td>
                                            <td>
                                                <select placeholder='Type and select' name="" id="">
                                                    <option value="">Type and select</option>
                                                    <option value=""></option>
                                                </select>
                                            </td>
                                            <td>
                                                <select placeholder='Perssit' name="" id="">
                                                    <option value="">Perssit</option>
                                                    <option value=""></option>
                                                </select>
                                            </td>
                                            <td>
                                                <select placeholder='Include In' name="" id="">
                                                    <option value="">Include In</option>
                                                    <option value=""></option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='text-center'>3</td>
                                            <td>
                                                <select placeholder='Type and select' name="" id="">
                                                    <option value="">Type and select</option>
                                                    <option value=""></option>
                                                </select>
                                            </td>
                                            <td>
                                                <select placeholder='Perssit' name="" id="">
                                                    <option value="">Perssit</option>
                                                    <option value=""></option>
                                                </select>
                                            </td>
                                            <td>
                                                <select placeholder='Include In' name="" id="">
                                                    <option value="">Include In</option>
                                                    <option value=""></option>
                                                </select>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>


                    {/* <newMeetingTable/> */}

                </div>

                {/* end first table  */}

            </div>
        </AdminLayout>
    )
}

export default facilityMeeting