import React from 'react';


const QuickCalculations= (props: any) => {




    return(
        <>
        <div id="content">          
                <div className='pt-3 d-flex align-items-center bg-light border-bottom'>                   
                    <h3 className='ms-1 me-4 lable-text'>Quick Calculation </h3>
                </div>
               
                <div className="pt-1">
                    <div className="tbl-container">
                        <div className="mb-4 tbl-fixed">
                            <table className="table table-bordered ">
                                <thead>
                                    <tr className='CustomCard'>
                                        <th className='ps-3 setup-table-head'>Indicators</th>
                                        <th className='text-center weightage-text'>Current CMI</th>
                                        <th className='text-center weightage-text'>Current $</th>
                                        <th className='text-center weightage-text'>Adj CMI</th>
                                        <th className='text-center weightage-text'>Adj $</th>
                                    </tr>
                                </thead>                                
                                    <tbody>                                       
                                                <tr  className='CustomCard'>
                                                    <td className='ps-3'>PT/OT</td>
                                                    <td className='ps-3'>1</td>
                                                    <td className='ps-3'>1</td>                                                   
                                                    <td className='ps-3'>1</td>                                                   
                                                    <td className='ps-3'>1</td>                                                   
                                                </tr>
                                                <tr  className='CustomCard'>
                                                    <td className='ps-3'>ST</td>
                                                    <td className='ps-3'>1</td>
                                                    <td className='ps-3'>1</td>                                                   
                                                    <td className='ps-3'>1</td>                                                   
                                                    <td className='ps-3'>1</td>                                                   
                                                </tr>
                                                <tr  className='CustomCard'>
                                                    <td className='ps-3'>RUG</td>
                                                    <td className='ps-3'>1</td>
                                                    <td className='ps-3'>1</td>                                                   
                                                    <td className='ps-3'>1</td>                                                   
                                                    <td className='ps-3'>1</td>                                                   
                                                </tr>
                                                <tr  className='CustomCard'>
                                                    <td className='ps-3'>NTA.</td>
                                                    <td className='ps-3'>1</td>
                                                    <td className='ps-3'>1</td>                                                   
                                                    <td className='ps-3'>1</td>                                                   
                                                    <td className='ps-3'>1</td>                                                   
                                                </tr>
                                                <tr className='CustomCard'>
                                                    <td className='ps-3'>Fed</td>
                                                    <td className='ps-3'>1</td>
                                                    <td className='ps-3'>1</td>                                                   
                                                    <td className='ps-3'>1</td>                                                   
                                                    <td className='ps-3'>1</td>                                                   
                                                </tr>                                       
                                    </tbody>                                
                            </table>
                            <div >
                            <button className='btn-rounded mt-3 p-2 serach' style={{marginLeft: "16rem"}}>
								Close
							</button>
							<button className='btn-rounded mt-3 p-2 serach'>
								Update Quick Calc
							</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        
    </>
    )

}

export default QuickCalculations