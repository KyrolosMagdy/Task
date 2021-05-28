import './App.css';
import NavBar from './components/nav-bar/nav-bar.component';
import UsersPage from './pages/users/usersPage.page';
import Loader from './components/loader/loader.component';
import { connect } from 'react-redux';
import PostsPage from './pages/posts/user-posts.page';
import { Switch, Route } from 'react-router-dom';
import CommentPage from './pages/comments/comments.page';

function App({ isLoading }) {
  return (
    <div className="App">
      <Loader isLoading={isLoading} />
      <NavBar />
      <Switch>
        <Route path="/:userId/:postId" exact component={CommentPage} />
        <Route path="/:userId" exact component={PostsPage} />
        <Route path="/" exact component={UsersPage} />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLoading: state.users.isLoading,
});
export default connect(mapStateToProps)(App);
