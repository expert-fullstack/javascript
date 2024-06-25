import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import axios from 'axios';

interface Message {
  name: string;
  message: string;
}

export const Messaging: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [requesting, setRequesting] = useState<boolean>(false);

  useEffect(() => {
    setRequesting(true);
    axios.get("/messages").then((resp) => {
      setMessages(resp.data.messages);
      setRequesting(false);
    });
  }, []);

  return (
    <Container>
      {/* Your form goes here if needed */}
      <div className="message-list">
        <h3>Messages</h3>
        {requesting ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          <>
            {messages.map((m, index) => (
              <div key={index}>
                {m.name}: {m.message}
              </div>
            ))}
          </>
        )}
      </div>
    </Container>
  );
};
