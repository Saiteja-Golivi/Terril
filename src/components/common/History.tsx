import React from 'react';


const History = (props: any) => {




    return (
        <>
            <div id="content">
                <div className='pt-3 d-flex align-items-center bg-light border-bottom'>
                    <strong className='ms-1 me-4 lable-text'>History </strong>
                </div>
                <table className="table table-bordered ">
                    <thead>
                        <tr className='CustomCard'>
                            <th className='ps-3 setup-table-head'>ARD Type</th>
                            <th className='text-center weightage-text'>ARD CMI code</th>
                            <th className='text-center weightage-text'>Date</th>
                            <th className='text-center weightage-text'>Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr className='CustomCard'>
                            <td className='ps-3'>5 Days</td>
                            <td className='ps-3'>SD-BHA-1-2</td>
                            <td className='ps-3'>2023-05-22 15-12</td>
                            <td className='ps-3'>
                                <select name="" id="" className='rounded-5 p-2 border-0'>
                                    <option value="1">Lock</option>
                                    <option value="2">Xmit</option>
                                </select>
                            </td>

                        </tr>
                    </tbody>
                </table>

                <div>
                    <button className='btn-rounded mt-3 p-2 serach' style={{ marginLeft: "37rem" }}>
                        Cancel
                    </button>
                    <button className='btn-rounded mt-3 p-2 serach'>
                        Update History
                    </button>
                </div>
            </div >

        </>
    )

}

export default History