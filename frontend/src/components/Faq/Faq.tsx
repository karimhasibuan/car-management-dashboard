import React from "react";
import { Container, Accordion, Card, Col } from "react-bootstrap";
import styles from "./styles";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const faqData: FAQItem[] = [
    {
      question: "Apa saja syarat yang dibutuhkan?",
      answer: "Jawaban pertanyaan pertama.",
    },
    {
      question: "Berapa hari minimal sewa mobil lepas kunci?",
      answer: "Jawaban pertanyaan kedua.",
    },
    {
      question: "Berapa hari sebelumnya sebaiknya booking sewa mobil?",
      answer: "Jawaban pertanyaan ketiga.",
    },
    {
      question: "Apakah Ada biaya antar-jemput?",
      answer: "Jawaban pertanyaan keempat.",
    },
    {
      question: "Bagaimana jika terjadi kecelakaan?",
      answer: "Jawaban pertanyaan kelima.",
    },
  ];

  return (
    <Container>
      <div className={`${styles.faqSection}`}>
        <Col sm={6}>
          <h3>Frequently Asked Question</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </Col>
        <Col sm={6}>
          <Accordion defaultActiveKey={["0"]}>
            {faqData.map((item, index) => (
              <Card key={index} className={`${styles.itemFaqSection}`}>
                <Accordion.Item eventKey={index.toString()}>
                  <Accordion.Header>{item.question}</Accordion.Header>
                  <Accordion.Body>{item.answer}</Accordion.Body>
                </Accordion.Item>
              </Card>
            ))}
          </Accordion>
        </Col>
      </div>
    </Container>
  );
};

export default FAQSection;
