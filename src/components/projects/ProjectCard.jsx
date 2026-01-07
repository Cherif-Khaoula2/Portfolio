import React, { useContext } from 'react';
import {
  Button, Card, Badge, Col,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { FaDrupal, FaReact, FaJava, FaPhp, FaHtml5, FaCss3Alt, FaMobileAlt, FaMicrochip } from 'react-icons/fa';
import { SiTypescript, SiLaravel, SiTailwindcss, SiAngular, SiSpringboot, SiInertia, SiXgboost, SiRandomforest, SiFlutter } from 'react-icons/si';
import { MdFolder, MdPeople, MdMessage } from 'react-icons/md';
const tagIcons = {
  Drupal: <FaDrupal />,
  React: <FaReact />,
  Laravel: <SiLaravel />,
  TypeScript: <SiTypescript />,
  PHP: <FaPhp />,
  Tailwind: <SiTailwindcss />,
  Inertia: <SiInertia />,
  Angular: <SiAngular />,
  'Spring Boot': <SiSpringboot />,
  Java: <FaJava />,
  API: <FaMicrochip />,
  Microservices: <FaMicrochip />,
 XGBoost: <FaMicrochip />,
  'Random Forest': <FaMicrochip />,
  IA: <FaMicrochip />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  Mobile: <FaMobileAlt />,
  Flutter: <SiFlutter />,
  'Gestion documentaire': <MdFolder />,
  'Communication interne': <MdMessage />,
  Intranet: <MdPeople />,
  'Portail interne': <MdFolder />,
  'Gestion scolaire': <MdFolder />,
  Éducation: <MdFolder />,
  SSH: <FaMicrochip />,
  'Active Directory': <FaMicrochip />,
  Exchange: <FaMicrochip />,
  Web: <FaHtml5 />,
};

const styles = {
  badgeStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 5,
  },
  cardStyle: {
    borderRadius: 10,
  },
  cardTitleStyle: {
    fontSize: 24,
    fontWeight: 700,
  },
  cardTextStyle: {
    textAlign: 'left',
  },
  linkStyle: {
    textDecoration: 'none',
    padding: 10,
  },
  buttonStyle: {
    margin: 5,
  },
};

const ProjectCard = (props) => {
  const theme = useContext(ThemeContext);
  const parseBodyText = (text) => <ReactMarkdown children={text} />;

  const { project } = props;

  return (
    <Col>
      <Card
        style={{
          ...styles.cardStyle,
          backgroundColor: theme.cardBackground,
          borderColor: theme.cardBorderColor,
        }}
        text={theme.bsSecondaryVariant}
      >
        {project?.image && (
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + '/' + project.image}
          />
        )}

        <Card.Body>
          <Card.Title style={styles.cardTitleStyle}>{project.title}</Card.Title>
          <Card.Text style={styles.cardTextStyle}>
            {parseBodyText(project.bodyText)}
          </Card.Text>
        </Card.Body>

        <Card.Body>
          {project?.links?.map((link) => (
            <Button
              key={link.href}
              style={styles.buttonStyle}
              variant={'outline-' + theme.bsSecondaryVariant}
              onClick={() => window.open(link.href, '_blank')}
            >
              {link.text}
            </Button>
          ))}
        </Card.Body>
        {project.tags && (
          <Card.Footer style={{ backgroundColor: theme.cardFooterBackground, display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                pill
                bg={theme.bsSecondaryVariant}
                text={theme.bsPrimaryVariant}
                style={{ ...styles.badgeStyle, display: 'flex', alignItems: 'center', gap: '5px', cursor: 'default' }}
              >
                {tagIcons[tag] && <span>{tagIcons[tag]}</span>}
                {tag}
              </Badge>
            ))}
          </Card.Footer>

        )}
      </Card>
    </Col>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    bodyText: PropTypes.string.isRequired,
    image: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })),
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProjectCard;
