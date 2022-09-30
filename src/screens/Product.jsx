import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function Product() {
  const params = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (params?.id) {
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${params.id}`)
        .then((response) => response.json())
        .then((data) => setPost(data));
    }
  }, []);

  return (
    <Container>
      <Row>
        {post?.map((post) => {
          return (
            <Col xs={4}>
              <Card style={{ width: "20rem" }} key={post.id}>
                <Card.Body>
                  <Card.Title>
                     {post.title}
                  </Card.Title>
                  <Card.Text> User: {post.userId} post</Card.Text>
                  <Card.Text>{post.body}</Card.Text>
                  <Card.Text>Post ID:{post.id}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Product;