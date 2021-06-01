import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { useConversations } from '../contexts/ConversationsProvider';

export default function Conversations() {
    const {conversations, selectConversationIndex} = useConversations();
    return (
        <ListGroup variant="flush">
            {conversations.map((conversation , index) => (
                <ListGroupItem key={index}
                action
                onClick={() => selectConversationIndex(index)}
                active={conversation.selected}>
                {conversation.recipients.map(r => r.name).join(' , ')}
            </ListGroupItem>
            ))}
        </ListGroup>
    )
}
