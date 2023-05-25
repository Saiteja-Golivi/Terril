import { right } from '@popperjs/core';
import React from 'react';


const SkipDay = (props: any) => {




    return (
        <>
            <div id="content">
                <div className='pt-3 d-flex align-items-center bg-light border-bottom'>
                    <strong className='ms-1 me-4 lable-text'>Skip Days Or Interrupted Stay Days </strong>
                </div>
                <div className='row'>
                <div className='col-6 pt-3' style={{borderRight: "2px dashed rgb(214 229 242);"}}>
                    <table className='table'>
                        <tr>
                            <th></th>
                            <th>
                                <span className='px-0'>From</span>
                            </th>
                            <th>
                                <span className='px-0'>To</span>
                            </th>
                        </tr>
                        <tr className='text-center'>
                            <td><div className='DivFormat bg-light'>Visit 1</div></td>
                            <td><div className='DivFormat'><input type="Date" className='inputstyle'/></div></td>
                            <td><div className='DivFormat'><input type="Date" className='inputstyle'/></div></td>
                        </tr>
                        <tr className='text-center'>
                            <td><div className='DivFormat bg-light'>Visit 1</div></td>
                            <td><div className='DivFormat'><input type="Date" className='inputstyle' /></div></td>
                            <td><div className='DivFormat'><input type="Date" className='inputstyle' /></div></td>
                        </tr>
                        <tr className='text-center'>
                            <td><div className='DivFormat bg-light'>Visit 1</div></td>
                            <td><div className='DivFormat '><input type="Date" className='inputstyle'/></div></td>
                            <td><div className='DivFormat'><input type="Date"  className='inputstyle'/></div></td>
                        </tr>
                        <tr className='text-center'>
                            <td><div className='DivFormat bg-light'>Visit 1</div></td>
                            <td><div className='DivFormat'><input type="Date" className='inputstyle'/></div></td>
                            <td><div className='DivFormat'><input type="Date" className='inputstyle'/></div></td>
                        </tr>
                    </table>
                </div>
                <div className='col-6 pt-3'>
                <table className='table'>
                        <tr>
                            <th></th>
                            <th>
                                <span className='px-0'>From</span>
                            </th>
                            <th>
                                <span className='px-0'>To</span>
                            </th>
                        </tr>
                        <tr className='text-center'>
                            <td><div className='DivFormat bg-light'>Visit 1</div></td>
                            <td><div className='DivFormat'><input type="Date" className='inputstyle'/></div></td>
                            <td><div className='DivFormat'><input type="Date" className='inputstyle'/></div></td>
                        </tr>
                        <tr className='text-center'>
                            <td><div className='DivFormat bg-light'>Visit 1</div></td>
                            <td><div className='DivFormat'><input type="Date" className='inputstyle' /></div></td>
                            <td><div className='DivFormat'><input type="Date" className='inputstyle' /></div></td>
                        </tr>
                        <tr className='text-center'>
                            <td><div className='DivFormat bg-light'>Visit 1</div></td>
                            <td><div className='DivFormat '><input type="Date" className='inputstyle'/></div></td>
                            <td><div className='DivFormat'><input type="Date"  className='inputstyle'/></div></td>
                        </tr>
                        <tr className='text-center'>
                            <td><div className='DivFormat bg-light'>Visit 1</div></td>
                            <td><div className='DivFormat'><input type="Date" className='inputstyle'/></div></td>
                            <td><div className='DivFormat'><input type="Date" className='inputstyle'/></div></td>
                        </tr>
                    </table>
                </div>
                </div>
                <div>
                    <button className='btn-rounded mt-3 p-2 serach' style={{ marginLeft: "37rem" }}>
                        Cancel
                    </button>
                    <button className='btn-rounded mt-3 p-2 serach'>
                        Save
                    </button>
                </div>
            </div >


        </>
    )

}

export default SkipDay