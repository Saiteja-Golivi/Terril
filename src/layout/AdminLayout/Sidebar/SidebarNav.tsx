import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type IconDefinition } from "@fortawesome/free-regular-svg-icons";
import {
  faBook,
  faChevronUp,
  faTableColumns,
  faGear,
  faCircleInfo,
  faBed,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import React, {
  type PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  Accordion,
  AccordionContext,
  Button,
  Nav,
  useAccordionButton,
} from "react-bootstrap";
import classNames from "classnames";
import Link from "next/link";

type SidebarNavItemProps = {
  href: string;
  icon?: IconDefinition;
} & PropsWithChildren;

const SidebarNavItem = (props: SidebarNavItemProps) => {
  const { icon, children, href } = props;

  return (
    <Nav.Item className="nav-item">
      <Link href={href} passHref legacyBehavior>
        <Nav.Link className="px-3 py-2 d-flex align-items-center">
          {icon ? (
            <FontAwesomeIcon className="nav-icon ms-n3" icon={icon} />
          ) : (
            <span className="nav-icon ms-n3" />
          )}
          {children}
        </Nav.Link>
      </Link>
    </Nav.Item>
  );
};

const SidebarNavTitle = (props: PropsWithChildren) => {
  const { children } = props;

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
  const { activeEventKey } = useContext(AccordionContext);
  const { eventKey, icon, children, setIsShow } = props;

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
        "rounded-0 nav-link px-3 py-2 d-flex align-items-center flex-fill w-100 shadow-none",
        {
          collapsed: !isCurrentEventKey,
        }
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
  const { toggleIcon, toggleText, children } = props;

  const [isShow, setIsShow] = useState(false);

  return (
    <Accordion
      as="li"
      bsPrefix="nav-group"
      className={classNames({ show: isShow })}
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
        <SidebarNavItem icon={faTableColumns} href="/login">
          Dashboard
        </SidebarNavItem>
        <SidebarNavItem icon={faBed} href="colors.html">
          Resident Actions
        </SidebarNavItem>
        <SidebarNavItem icon={faGear} href="typography.html">
          Facility Settings
        </SidebarNavItem>
        <SidebarNavItem icon={faBook} href="widgets.html">
          Reports
        </SidebarNavItem>
        <SidebarNavItem icon={faCircleInfo} href="docs.html">
          Help
        </SidebarNavItem>

		<div>
      
          <SidebarNavItem icon={faArrowRightFromBracket} href="/login">
			Log Out
		  </SidebarNavItem>
      </div>

      </ul>

      
    </>
  );
}
