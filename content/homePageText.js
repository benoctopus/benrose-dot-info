import React, { Fragment } from 'react';
import { Typography, Button, List, ListItem } from '@material-ui/core';
import SimpleParagraph from '../components/SimpleParagraph';
import SkillsSwitcher from '../components/SkillsSwitcher';
import { prefix } from '../util/styles';

const styles = {
  bold: {
    fontWeight: 'bold',
  },
  bigger: {
    fontSize: '1.2rem',
  },
  indent: {
    paddingLeft: '1rem',
  },
  buttonBox: {
    marginTop: '.8rem',
    display: 'flex',
    flexFlow: 'row-reverse nowrap',
  },
  buttonBoxVert: {
    marginTop: '.8rem',
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  buttonContainer: {
    height: 'fit-content',
    paddingLeft: '.8rem',
  },
  button: {
    backgroundColor: '#00000000',
    borderColor: '#ffffff',
    color: '#ffffff',
  },
};

console.log(styles);

styles.boldAndBig = { ...styles.bold, ...styles.bigger };

const content = callback => [
  <SimpleParagraph
    header="Benjamin Rose"
    paragraph={classname => (
      <Fragment>
        <Typography className={classname} component="p">
          <span style={styles.boldAndBig}>Full Stack Development</span>
        </Typography>
        <Typography className={classname} style={styles.indent} component="p">
          <span style={styles.bold}>is</span> more than a Job description. It is the collaborative effort of seeing
           a product from concept to creation. To the standard of which I hold myself,
          a <span style={styles.bold}>Full Stack Developer</span> strives to understand the development process as a whole.
          Those who carry the title should be prepared to contribute to all facets of the process,
          and to do so wit and image of the end product in mind.
        </Typography>
        <Typography className={classname} style={styles.indent} component="p">
          <span style={styles.bold}>I</span> as a <span style={styles.bold}>Full Stack Developer</span> can deliver upon this
           these ideals. With expertise in core web, mobile, and IOT tools and technologies, can
           bring your dream from zero to one, all while implementing an elegant and efficient development process.
        </Typography>
        <div style={styles.buttonBox}>
          <div style={styles.buttonContainer}>
            <Button variant="outlined" style={styles.button} onClick={() => callback(1)}>
              Contact
            </Button>
          </div>
          <div style={styles.buttonContainer}>
            <Button variant="outlined" style={styles.button} onClick={() => callback(2)}>
              Skills
            </Button>
          </div>
        </div>
      </Fragment>
    )}
  />,
  <SimpleParagraph
    header="Benjamin Rose"
    paragraph={classname => (
      <Fragment>
        <Typography className={classname} component="p">
          <span style={styles.boldAndBig}>Full Stack Development</span>
        </Typography>
      </Fragment>
    )}
  />,
  <SimpleParagraph
    header="skills"
    paragraph={classname => (
      <Fragment>
        <SkillsSwitcher
          textClass={classname}
          bottomBar={() => (
            <div style={styles.buttonBox}>
              <div style={styles.buttonContainer}>
                <Button variant="outlined" style={styles.button} onClick={() => callback(1)}>
              Contact
                </Button>
              </div>
              <div style={styles.buttonContainer}>
                <Button variant="outlined" style={styles.button} onClick={() => callback(0)}>
              About Me
                </Button>
              </div>
            </div>

          )
          }
        />
      </Fragment>
    )}
  />,
];

export default content;
