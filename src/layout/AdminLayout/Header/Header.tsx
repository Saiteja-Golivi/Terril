import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Breadcrumb from '@layout/AdminLayout/Breadcrumb/Breadcrumb'
import HeaderNotificationNav from '@layout/AdminLayout/Header/HeaderNotificationNav'
import HeaderProfileNav from '@layout/AdminLayout/Header/HeaderProfileNav'
import { Button, Container, Dropdown, OverlayTrigger, Popover } from 'react-bootstrap'

type HeaderProps = {
  toggleSidebar: () => void;
  toggleSidebarMd: () => void;
}

export default function Header(props: HeaderProps) {
  const { toggleSidebar, toggleSidebarMd } = props


  const popover = (

   <Popover id="popover-basic">    
    <Popover.Body>    
     <div className="row py-2">            
      <div className="col-3">Do Assessment</div>    
		   <div className="col-3">Deactivate Resident</div>    
		   <div className="col-3">Update Resident</div>    
		   <div className="col-3">View Resident</div>  
     </div>    
     <div className="row py-2">    
     <div className="col-3">Do Assessment</div>    
		   <div className="col-3">Deactivate Resident</div>    
		   <div className="col-3">Update Resident</div>    
		   <div className="col-3">View Resident</div>    
     </div>
     <div className="row py-2">    
     <div className="col-3">Do Assessment</div>    
		   <div className="col-3">Deactivate Resident</div>    
		   <div className="col-3">Update Resident</div>    
		   <div className="col-3">View Resident</div>    
     </div>
     <div className="row py-2">    
     <div className="col-3">Do Assessment</div>    
		   <div className="col-3">Deactivate Resident</div>    
		   <div className="col-3">Update Resident</div>    
		   <div className="col-3">View Resident</div>   
       
     </div>
    </Popover.Body>    
   </Popover>
    
   )
   
  return (
    <header className="header roundedLeftTop sticky-top py-2 px-sm-2 border-bottom">
      <Container fluid className="header-navbar d-flex align-items-center">
        <Button
          variant="link"
          className="header-toggler d-md-none px-md-0 me-md-3 rounded-0 shadow-none"
          type="button"
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon={faBars} color='white'/>
        </Button>
        <text className='header-title'>Dashboard</text>
        <div className='ms-auto'>
          <select name="" id="" className='p-2 rounded-5 Select'>
            <option value="1">Select Facility</option>
            <option value="2">Select Facility</option>
            <option value="3">Select Facility</option>
          </select>
        </div>
       <div className="header-nav " > 
       {/* ps-5 remove */}
          <div
            className="header-toggler d-none d-md-inline-block  me-md-3 rounded-circle border-secondary"
           
          >
            {/* <FontAwesomeIcon icon={faBars} color='#000000' size='lg' /> */}
            {/* mega menu  start */}
            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>

              <Button variant="success">
                <FontAwesomeIcon icon={faBars} color='#000000' size='lg' />
              </Button>

            </OverlayTrigger>

          </div>
       </div>
        <div className="header-nav">
          <HeaderNotificationNav />
        </div>
        <div className="header-nav ms-2">
          <HeaderProfileNav />
        </div>
      </Container>
    </header>
  )
}
