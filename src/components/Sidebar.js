import React from "react";
import {
  Tab,
  Nav,
  TabContainer,
  NavItem,
  NavLink,
  TabPane,
  TabContent,
  Button,
  Modal,
} from "react-bootstrap";
import Contacts from "./Contacts";
import Conversations from "./Conversations";
import NewConversationModal from "./NewConversationModal"
import NewContactModal from "./NewContactModal"

const CONVERSATIONS_KEY = "Conversation";
const CONTACTS_KEY = "Contacts";

export default function Sidebar({ id }) {
  const [activeKey, setActiveKey] = React.useState(CONVERSATIONS_KEY);
  const [modalOpen , setModalOpen] = React.useState(false)
  const conversationsOpen = activeKey === CONVERSATIONS_KEY

  function closeModal() {
    setModalOpen(false);
  }


  return (
    <div style={{ width: "250px" }} className="d-flex flex-column">
      <TabContainer activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <NavItem>
            <NavLink eventKey={CONVERSATIONS_KEY}>Conversation</NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventKey={CONTACTS_KEY}>Contacts</NavLink>
          </NavItem>
        </Nav>
        <TabContent className="border-right overflow-auto flex-grow-1" >
          <TabPane eventKey={CONVERSATIONS_KEY}>
            <Conversations />
          </TabPane>
          <TabPane eventKey={CONTACTS_KEY}>
              <Contacts />
          </TabPane>
        </TabContent>
        <div className="p-2 border small">
            Your ID: <span className="text-muted">{id}</span>
        </div>
        <Button onClick={() => setModalOpen(true)}
        className="rounded-0">
            New {conversationsOpen ? `${CONVERSATIONS_KEY}` : `${CONTACTS_KEY}`}
        </Button>
      </TabContainer>


      <Modal show={modalOpen} onHide={closeModal}>
          {conversationsOpen ?
          <NewConversationModal closeModal={closeModal}/> :
          <NewContactModal closeModal={closeModal}/> }
      </Modal>
    </div>
  );
}
