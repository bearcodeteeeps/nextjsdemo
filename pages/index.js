import Link from 'next/link'

import Layout from '../components/Layout.js'


function getPosts () {
  return [
    { id: 'breweries', title: 'New Breweries to Try', content: 'New Belgium, Left Hand'},
    { id: 'beard', title: 'Awesome Beards', content: 'Beards'},
    { id: 'tacos', title: 'Awesome Tacos', content: 'Tacos'},
  ]
}

const PostLink = ({ post }) => (
  <li>
    <Link as={`/p/${post.id}?title=${post.title}&content=${post.content}`} href={`/post?title=${post.title}&content=${post.content}`}>
      <a>{post.title}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: "Arial";
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
);

export default () => (
  <div>
    <Layout>
      <h1>My Blog</h1>
      <ul>
        {getPosts().map((post) => (
          <PostLink key={post.id} post={post}/>
        ))}
      </ul>
      <style jsx>{`
        h1, a {
          font-family: "Arial";
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </Layout>
  </div>
)