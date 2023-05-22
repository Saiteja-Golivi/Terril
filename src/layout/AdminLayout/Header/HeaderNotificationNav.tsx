import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBell, faEnvelope, type IconDefinition} from '@fortawesome/free-regular-svg-icons';
import {
	faBasketShopping,
	faChartBar,
	faGaugeHigh,
	faList,
	faUserMinus,
	faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import {
	Badge, Dropdown, Nav, NavLink, ProgressBar,
} from 'react-bootstrap';
import Link from 'next/link';
import React, {type PropsWithChildren} from 'react';

type ItemWithIconProps = {
	icon: IconDefinition;
} & PropsWithChildren;

const ItemWithIcon = (props: ItemWithIconProps) => {
	const {icon, children} = props;

	return (
		<>
			<FontAwesomeIcon className="me-2" icon={icon} fixedWidth  />
			{children}
		</>
	);
};

export default function HeaderNotificationNav() {
	return (
		<Nav>
			<Nav.Item>
				<Dropdown>
					<Dropdown.Toggle as={NavLink} bsPrefix="hide-caret" id="dropdown-notification" className='px-5 border-end'>
						<FontAwesomeIcon icon={faBell} size="lg" color='black'  />
						<Badge pill bg="danger" className="position-absolute top-0 right-0">
                         5
						</Badge>
					</Dropdown.Toggle>
					<Dropdown.Menu className="pt-0" align="end">
						<Dropdown.Header className="bg-light fw-bold rounded-top">You have 5 notifications</Dropdown.Header>
						<Link href="/" passHref legacyBehavior>
							<Dropdown.Item>
								<ItemWithIcon icon={faUserPlus}>
                                    New user registered
								</ItemWithIcon>
							</Dropdown.Item>
						</Link>
						<Link href="/" passHref legacyBehavior>
							<Dropdown.Item>
								<ItemWithIcon icon={faUserMinus}>
                                    User deleted
								</ItemWithIcon>
							</Dropdown.Item>
						</Link>
						<Link href="/" passHref legacyBehavior>
							<Dropdown.Item>
								<ItemWithIcon icon={faChartBar}>
                  Sales report is ready
								</ItemWithIcon>
							</Dropdown.Item>
						</Link>
						<Link href="/" passHref legacyBehavior>
							<Dropdown.Item>
								<ItemWithIcon icon={faBasketShopping}>
                  New client
								</ItemWithIcon>
							</Dropdown.Item>
						</Link>
						<Link href="/" passHref legacyBehavior>
							<Dropdown.Item>
								<ItemWithIcon icon={faGaugeHigh}>
                  Server overloaded
								</ItemWithIcon>
							</Dropdown.Item>
						</Link>

						<Dropdown.Header className="bg-light fw-bold">Server</Dropdown.Header>

						<Link href="/" passHref legacyBehavior>
							<Dropdown.Item>
								<small><div className="text-uppercase"><b>CPU Usage</b></div></small>
								<ProgressBar
									className="progress-thin mt-2"
									variant="primary"
									now={25}
								/>
								<small>
									<div className="text-muted">348 Processes. 1/4 Cores.</div>
								</small>
							</Dropdown.Item>
						</Link>
						<Link href="/" passHref legacyBehavior>
							<Dropdown.Item>
								<small><div className="text-uppercase"><b>Memory Usage</b></div></small>
								<ProgressBar
									className="progress-thin mt-2"
									variant="warning"
									now={75}
								/>
								<small>
									<div className="text-muted">11,444GB / 16,384MB</div>
								</small>
							</Dropdown.Item>
						</Link>
						<Link href="/" passHref legacyBehavior>
							<Dropdown.Item>
								<small><div className="text-uppercase"><b>SSD 1 Usage</b></div></small>
								<ProgressBar
									className="progress-thin mt-2"
									variant="danger"
									now={90}
								/>
								<small>
									<div className="text-muted">243GB / 256GB</div>
								</small>
							</Dropdown.Item>
						</Link>
					</Dropdown.Menu>
				</Dropdown>
			</Nav.Item>
		</Nav>
	);
}
