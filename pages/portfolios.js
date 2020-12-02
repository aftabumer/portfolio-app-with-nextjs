import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import axios from "axios";
// import Link from "next/link";
import { Link } from "../routes";

const Portfolios = ({ posts }) => {
  return (
    <BaseLayout>
      I am at Portfolio page
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link route={`/portfolios/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </BaseLayout>
  );
};

Portfolios.getInitialProps = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const posts = res.data;
  // let posts = [];
  // try {
  //   const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //   posts = res.data;
  // } catch (e) {
  //   console.log(e);
  // }
  return { posts: posts.slice(0, 10) };
};
export default Portfolios;

// import React, { Component } from "react";
// import BaseLayout from "../components/layouts/BaseLayout";
// import axios from "axios";

// class Portfolios extends Component {
//   static async getInitialProps() {
//     let posts = [];
//     try {
//       const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//       posts = res.data;
//     } catch (e) {
//       console.log(e);
//     }
//     return { posts: posts.slice(0, 10) };
//   }
//   render() {
//     const { posts } = this.props;
//     return (
//       <BaseLayout>
//         I am at Portfolio page
//         <ul>
//           {posts.map((post) => (
//             <li>{post.id}</li>
//           ))}
//         </ul>
//       </BaseLayout>
//     );
//   }
// }
// export default Portfolios;
