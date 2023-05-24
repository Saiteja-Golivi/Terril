import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {type IconDefinition} from '@fortawesome/free-regular-svg-icons';
import {
	faBook,
	faChevronUp,
	faGear,
	faCircleInfo,
	faBed,
	faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import React, {
	type PropsWithChildren,
	useContext,
	useEffect,
	useState,
} from 'react';
import {
	Accordion,
	AccordionContext,
	Button,
	Nav,
	useAccordionButton,
} from 'react-bootstrap';
import classNames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

type SidebarNavItemProps = {
	href: string;
	icon?: IconDefinition;
	src: string;
	width: number;
	height: number;
} & PropsWithChildren;

const SidebarNavItem = (props: SidebarNavItemProps) => {
	const {icon, children, href, src, width, height} = props;

	return (
		<Nav.Item className="nav-items">
			<Link href={href} passHref legacyBehavior>
				<Nav.Link className="px-3 py-2 d-flex align-items-center">
					
					<Image className='nav-icon' src={src} alt={''} width={width} height={height} />
					<div className='nav-title'>
						{children}

					</div>
				</Nav.Link>
			</Link>
		</Nav.Item>
	);
};

const SidebarNavTitle = (props: PropsWithChildren) => {
	const {children} = props;

	return (
		<li className="nav-title px-3 py-2 mt-3 text-uppercase fw-bold">
			{children}
		</li>
	);
};

type SidebarNavGroupToggleProps = {
	eventKey: string;
	icon: IconDefinition;
	setIsShow: (isShow: boolean) => void;
} & PropsWithChildren;

const SidebarNavGroupToggle = (props: SidebarNavGroupToggleProps) => {
	// https://react-bootstrap.github.io/components/accordion/#custom-toggle-with-expansion-awareness
	const {activeEventKey} = useContext(AccordionContext);
	const {eventKey, icon, children, setIsShow} = props;

	const decoratedOnClick = useAccordionButton(eventKey);

	const isCurrentEventKey = activeEventKey === eventKey;

	useEffect(() => {
		setIsShow(activeEventKey === eventKey);
	}, [activeEventKey, eventKey, setIsShow]);

	return (
		<Button
			variant="link"
			type="button"
			className={classNames(
				'rounded-0 nav-link px-3 py-2 d-flex align-items-center flex-fill w-100 shadow-none',
				{
					collapsed: !isCurrentEventKey,
				},
			)}
			onClick={decoratedOnClick}
		>
			<FontAwesomeIcon className="nav-icon ms-n3" icon={icon} />
			{children}
			<div className="nav-chevron ms-auto text-end">
				<FontAwesomeIcon size="xs" icon={faChevronUp} />
			</div>
		</Button>
	);
};

type SidebarNavGroupProps = {
	toggleIcon: IconDefinition;
	toggleText: string;
} & PropsWithChildren;

const SidebarNavGroup = (props: SidebarNavGroupProps) => {
	const {toggleIcon, toggleText, children} = props;

	const [isShow, setIsShow] = useState(false);

	return (
		<Accordion
			as="li"
			bsPrefix="nav-group"
			className={classNames({show: isShow})}
		>
			<SidebarNavGroupToggle
				icon={toggleIcon}
				eventKey="0"
				setIsShow={setIsShow}
			>
				{toggleText}
			</SidebarNavGroupToggle>
			<Accordion.Collapse eventKey="0">
				<ul className="nav-group-items list-unstyled">{children}</ul>
			</Accordion.Collapse>
		</Accordion>
	);
};

export default function SidebarNav() {
	return (
		<>
			<ul className="list-unstyled fs-4">
				<SidebarNavItem src='/Icons/Dashboard_IC.png' href="/login" width={24} height={24} >
          Dashboard
				</SidebarNavItem>
				<SidebarNavItem src='/Icons/Resident Actions_IC.png' href="/login" width={24} height={24}>
          Resident Actions
				</SidebarNavItem>
				<SidebarNavItem src='/Icons/Facility Setting_IC.png' href="/login" width={24} height={24}>
          Facility Settings
				</SidebarNavItem>
				<SidebarNavItem src='/Icons/Reports_IC.png' href="/login" width={24} height={24}>
          Reports
				</SidebarNavItem>
				<SidebarNavItem src='/Icons/Help_IC.png' href="/login" width={24} height={24}>
          Help
				</SidebarNavItem>

				<div>
      
					<SidebarNavItem src='/Icons/Log Out_IC.png' href="/login" width={24} height={24}>
			Log Out
		  </SidebarNavItem>
				</div>

			</ul>

      
		</>
	);
}
