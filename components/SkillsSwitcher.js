import React, { PureComponent, Fragment } from 'react';
import { Typography, List, ListItem } from '@material-ui/core';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import MagicTextBox from '../containers/MagicTextBox';
import { withStyles } from '../util/styles';

const lists = [
  {
    title: 'General',
    content: [
      'javascript (es2015, es6, es7)',
      'Typescript',
      'Flow',
      'Golang',
      'Python',
      'Java',
      'Shell Script',
    ],
  },
  {
    title: 'Web',
    content: [
      'REST',
      'React',
      'GraphQL',
      'Express',
      'Flask',
    ],
  },
  {
    title: 'Styling',
    content: [
      'CSS',
      'SASS',
      'CSS-in-JS',
      'Material-UI',
      'Bootstrap',
      'Responsive Web Design',
    ],
  },
  {
    title: 'Data',
    content: [
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'Prisma',
      'Sequelize',
      'Firebase',
    ],
  },
  {
    title: 'Mobile',
    content: [
      'React Native',
      'Android',
    ],
  },
  {
    title: 'DevOps',
    content: [
      'Docker',
      'AWS',
      'Google Cloud',
      'Heroku',
    ],
  },
];

const styles = {
  title: {
    transition: 'opacity 300ms, font-size 300ms',
    opacity: '0.7',
    fontSize: '1rem',
    cursor: 'pointer',
    margin: 0,
    padding: '.4rem',
  },
  active: {
    opacity: '1',
    fontSize: '1.2rem',
  },
  listContainer: {
    width: '100%',
    height: '100%',
  },
  list: {
    height: '10rem',
  },
  titleBar: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'flex-end',
    paddingLeft: '1rem',
  },
  listItem: {
    padding: 0,
  },
};

class SkillsSwitcher extends PureComponent {
  static propTypes = {
    textClass: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
  }

  state = {
    index: 0,
  }

  setIndex = index => this.setState({ index });

  getListItems = () => {
    const { textClass, bottomBar, classes } = this.props;
    const groups = [];
    const listLen = lists.length;
    for (let i = 0; i < listLen; i += 1) {
      const { content } = lists[i];
      const items = [];
      const len = content.length;
      for (let j = 0; j < len; j += 1) {
        items.push(
          <ListItem className={classes.listItem}>
            <Typography className={textClass} component="p">
              {`- ${content[j]}`}
            </Typography>
          </ListItem>
        );
      }
      groups.push(
        <Fragment>
          <List className={classes.list}>
            {items}
            {bottomBar()}
          </List>
        </Fragment>
      );
    }
    return groups;
  }

  getListTitles = () => {
    const { index } = this.state;
    const { textClass, classes } = this.props;
    const items = [];
    const len = lists.length;
    for (let i = 0; i < len; i += 1) {
      const { title } = lists[i];
      items.push(
        <Typography
          component="h1"
          className={
            classnames(
              textClass,
              classes.title,
              (i === index ? classes.active : '')
            )
          }
          onClick={() => this.setIndex(i)}
        >
          {title}
        </Typography>
      );
    }
    return (
      <div className={classes.titleBar}>
        {items}
      </div>
    );
  }

  render = () => {
    const { classes } = this.props;
    const { index } = this.state;
    return (
      <Fragment>
        {this.getListTitles()}
        <MagicTextBox
          content={this.getListItems()}
          index={index}
          duration={150}
          layout={classes.listContainer}
        />
      </Fragment>
    );
  }
}

export default withStyles(styles)(SkillsSwitcher);
