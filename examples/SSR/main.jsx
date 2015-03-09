// SSR doenst actually work here, but its a start

FlowRouter.route('/', {
  action(params, queryParams) {
    style = {width:'100%'}
    if (Meteor.isClient) {
      React.render((
        <div style={style}> 
          <h2>It Works!</h2>
        </div>
      ), document.body)
    } else {
      React.renderToString((
        <div style={style}> 
          <h2>It Works!</h2>
        </div>
      ))
    }
  }
});
