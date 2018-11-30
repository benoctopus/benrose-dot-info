import React, { Fragment } from 'react';
import { Typography, Button, List, ListItem } from '@material-ui/core';
import classnames from 'classnames';
import SimpleParagraph from '../components/SimpleParagraph';
import SkillsSwitcher from '../components/SkillsSwitcher';
import { withStyles } from '../util/styles';
import Theme from '../util/Theme';

const styles = theme => ({
  bold: {
    fontWeight: 'bold',
  },
  bigger: {
    fontSize: '1.2rem',
  },
  boldAndBig: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  indent: {
    paddingLeft: '1rem',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '.5rem',
    },
  },
  buttonBox: {
    paddingTop: '.8rem',
    display: 'flex',
    flexFlow: 'row-reverse nowrap',
  },
  buttonBoxVert: {
    paddingTop: '.8rem',
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
});


const content = callback => [
  <SimpleParagraph
    key="about"
    header="Benjamin Rose"
    Paragraph={withStyles(styles)(({ classes, classname }) => (
      // about
      <Fragment>
        <Typography className={classname} component="p">
          <span className={classes.boldAndBig}>Full Stack Development</span>
        </Typography>
        <Typography className={classnames(classname, classes.indent)} component="p">
          <span className={classes.bold}>Is</span> more than a Job description. It is the collaborative effort of seeing
           a product from concept to creation. To the standard of which I hold myself,
          a <span className={classes.bold}>Full Stack Developer</span> strives to understand the development process as a whole.
          Those who carry the title should be prepared to contribute to all facets of the process,
          and to do so wit and image of the end product in mind.
        </Typography>
        <Typography className={classnames(classname, classes.indent)} component="p">
          <span className={classes.bold}>I</span> as a <span className={classes.bold}>Full Stack Developer</span> can deliver upon this
           these ideals. With expertise in core web, mobile, and IOT tools and technologies, can
           bring your dream from zero to one, all while implementing an elegant and efficient development process.
        </Typography>
        <div className={classes.buttonBox}>
          <div className={classes.buttonContainer}>
            <Button variant="outlined" className={classes.button} onClick={() => callback(1)}>
              Contact
            </Button>
          </div>
          <div className={classes.buttonContainer}>
            <Button variant="outlined" className={classes.button} onClick={() => callback(2)}>
              Skills
            </Button>
          </div>
        </div>
      </Fragment>
    ))}
  />,
  // contact
  <SimpleParagraph
    key="contact"
    header="Get In Touch"
    Paragraph={withStyles(styles)(({ classes, classname }) => (
      <Fragment>
        <Typography className={classname} component="p">
          <span className={classes.boldAndBig}>Get in touch</span>
        </Typography>
        <Typography className={classnames(classname, classes.indent)} component="p">
          <span className={classes.bold}>is</span> more than a Job description. It is the collaborative effort of seeing
           a product from concept to creation. To the standard of which I hold myself,
          a <span className={classes.bold}>Full Stack Developer</span> strives to understand the development process as a whole.
          Those who carry the title should be prepared to contribute to all facets of the process,
          and to do so wit and image of the end product in mind.
        </Typography>
        <div className={classes.buttonBox}>
          <div className={classes.buttonContainer}>
            <Button variant="outlined" className={classes.button} onClick={() => callback(2)}>
              Skills
            </Button>
          </div>
          <div className={classes.buttonContainer}>
            <Button variant="outlined" className={classes.button} onClick={() => callback(0)}>
              About Me
            </Button>
          </div>
        </div>
      </Fragment>
    ))}
  />,
  // skills
  <SimpleParagraph
    key="skills"
    header="skills"
    Paragraph={withStyles(styles)(({ classes, classname }) => (
      <Fragment>
        <SkillsSwitcher
          textClass={classname}
          bottomBar={() => (
            <div className={classes.buttonBox}>
              <div className={classes.buttonContainer}>
                <Button variant="outlined" className={classes.button} onClick={() => callback(1)}>
              Contact
                </Button>
              </div>
              <div className={classes.buttonContainer}>
                <Button variant="outlined" className={classes.button} onClick={() => callback(0)}>
              About Me
                </Button>
              </div>
            </div>

          )
          }
        />
      </Fragment>
    ))}
  />,
];

export default content;
