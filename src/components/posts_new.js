import React, { Component } from 'react';
import { reduxForm }  from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';
class PostsNew extends Component {
  render() {

    // ES5 const handleSubmit = this.props.handleSubmit
    const { fields: { title, categories, content}, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create A New Post</h3>

        <div className={`form-group ${title.touched && title.invalid ? 'has-danger': ''}`}>

          <label>Title</label>
          <input type="text" className="form-control" {...title}/>

          <div className="text-help">
            {title.touched ? title.error : '' }
          </div>

        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger': ''}`}{...categories}>
          <label>Categories</label>
          <input type="text"  className="form-control"/>

          <div className="text-help" >
            {categories.touched ? categories.error : '' }
          </div>

        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger': ''}`}>

          <label>Content</label>
          <textarea className="form-control" {...content}/>

          <div className="text-help" >
            {content.touched ? content.error : '' }
          </div>

        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    )
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a username';
  }

  if (!values.categories) {
    errors.categories = 'Enter a category';
  }

  if (!values.content) {
    errors.content = 'Enter a content';
  }

  return errors;
}

// user types something in .... record it on application state
/* Behind the scene
state === {
  form: {
    PostsNewForm: {
      title: '....',
      categories: '.....',
      content: '.....'
    }
  }
}
*/

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew)
