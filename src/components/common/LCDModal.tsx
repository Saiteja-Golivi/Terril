import React from 'react';


const LCD= (props: any) => {




    return(
        <>
        <div id="content">          
                <div className='pt-3 d-flex align-items-center bg-light border-bottom'>                   
                    <strong className='ms-1 me-4 lable-text'>LCD </strong>
                </div>
            <div className='row py-2'>
                <div className='col-3'>
                    <label htmlFor="ActualLCD">Actual LCD </label>
                    <input type="Date" className='form-control'/>
                </div>
                <div className='col-3'>
                <label htmlFor="ActualLCD">LCD OutCome</label>
                    <input type="text" className='form-control'/>
                </div>
                <div className='col-3'>
                <label htmlFor="ActualLCD">Planned Location</label>
                    <input type="text" className='form-control'/>
                </div>
                <div className='col-3'>
                <label htmlFor="ActualLCD">Hospital Date</label>
                    <input type="Date" className='form-control'/>
                </div>

            </div> 
            <div>
            <button className='btn-rounded mt-3 p-2 serach' style={{marginLeft: "37rem"}}>
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

export default LCD