import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PageTitle from "../../components/shared/pageTitle/PageTitle";
const Blogs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <PageTitle title="blog"></PageTitle>
      <section className="bg-white container mx-auto dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto sm:py-16 lg:px-6">
          <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Questions
          </h2>
          <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-1">
            <div>
              <div
                className="mb-10"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  What is an access token and refresh token? How do they work
                  and where should we store them on the client-side?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  An access and a refresh token are used in authentication and
                  authorization protocols, typically in the context of web or
                  mobile applications.
                </p>{" "}
                <br />
                <p className="text-gray-500 dark:text-gray-400">
                  Access Token: When a client logs in , it typically sends its
                  credentials username/password to the server. If the
                  credentials are valid, the server generates an access token
                  and returns it to the client. The client includes this access
                  token in subsequent requests to access protected resources.
                  The server validates the access token for each request to
                  ensure the client has the necessary permissions to access the
                  requested resource. If the token is valid and has not expired,
                  the server processes the request; otherwise, it returns an
                  error.
                </p>{" "}
                <br />
                <p className="text-gray-500 dark:text-gray-400">
                  Refresh Token: A refresh token is a long-lived credential that
                  is used to obtain a new access token without requiring the
                  client to re-authenticate.After an access token expires, the
                  client can send the refresh token to the server to request a
                  new access token. If the refresh token is valid, the server
                  generates a new access token and returns it to the client.
                  This process allows the client to continue accessing protected
                  resources without requiring the user to log in again.
                </p>{" "}
                <br />
                <p className="text-gray-500 dark:text-gray-400">
                  Storage on the client-side:Browser-based applications: For web
                  applications, you can store tokens in an HTTP-only cookie or
                  in the browser s local storage
                </p>
              </div>
              <div
                className="mb-10"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Compare SQL and NoSQL databases?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  SQL (Structured Query Language) and NoSQL (Not Only SQL)
                  databases are two different types of database management
                  systems
                </p>{" "}
                <br />
                <p className="text-gray-500 dark:text-gray-400">
                  <h1 className="font-bold">SQL</h1>
                  <div>
                    <p>Data Model :</p>
                    <p>
                      SQL databases follow a relational data model, where data
                      is organized into tables with predefined schemas. These
                      tables have rows and columns, and relationships between
                      tables are established through foreign keys.
                    </p>{" "}
                    <br />
                    <p>Schema:</p>
                    <p>
                      databases enforce a rigid schema, meaning the structure of
                      the database is defined upfront. Any changes to the schema
                      require altering the table structure and potentially
                      migrating data.
                    </p>{" "}
                    <br />
                    <p>Scalability:</p>
                    <p>
                      SQL databases are vertically scalable, which means scaling
                      involves increasing the hardware resources (CPU, memory)
                      of a single server. Scaling can be limited due to hardware
                      constraints.
                    </p>{" "}
                    <br />
                    <p>Query Language:</p>
                    <p>
                      SQL databases use SQL as the standardized query language
                      for defining and manipulating data. SQL provides powerful
                      querying capabilities, including complex joins and
                      aggregations.
                    </p>
                  </div>
                  <h1 className="font-bold">No-SQL</h1>
                  <div>
                    <p>Data Model :</p>
                    <p>
                      NoSQL databases employ various data models, such as
                      key-value, document, columnar, and graph. They offer more
                      flexible schema designs, allowing for dynamic and
                      unstructured data storage.
                    </p>{" "}
                    <br />
                    <p>Schema:</p>
                    <p>
                      schema-less or schema-flexible. They allow for dynamic
                      schema changes, enabling easy scalability and
                      accommodating evolving data requirements.
                    </p>{" "}
                    <br />
                    <p>Scalability:</p>
                    <p>
                      horizontally scalable, which means they can distribute
                      data across multiple servers. They offer better
                      scalability for handling large volumes of data and high
                      traffic loads.
                    </p>{" "}
                    <br />
                    <p>Query Language:</p>
                    <p>
                      ocument-based databases may use JSON-like query languages,
                      while graph databases may use graph traversal languages.
                    </p>
                  </div>
                </p>
              </div>
              <div
                className="mb-10"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  What is express js? What is Nest JS ?
                </h3>
                <h1 className="font-bold">Express.js:</h1>
                <p className="text-gray-500 dark:text-gray-400">
                  Express.js is a minimal and flexible web application framework
                  for Node.js. it is handle routing, request/response handling,
                  and other common web application functionalities.
                </p>{" "}
                <br />
                <h1 className="font-bold">Nest.js:</h1>
                <p className="text-gray-500 dark:text-gray-400">
                  Nest.js is a progressive TypeScript-based framework for
                  building scalable and efficient server-side applications. It
                  leverages concepts from both object-oriented programming (OOP)
                  and functional programming (FP) to provide a robust
                  architecture and modular design for building complex
                  applications.
                </p>
            
              </div>
              <div
                className="mb-10"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  What is MongoDB aggregate and how does it work ?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  In MongoDB, the aggregate method is used to perform advanced
                  data processing and analysis operations on the documents
                  within a collection.
                </p>{" "}
                <br />
                <p className="text-gray-500 dark:text-gray-400">
                  The aggregate method takes an array of stages as its
                  parameter. Each stage represents a specific operation or
                  transformation that is applied to the documents in the
                  collection. These stages are processed in the order they are
                  specified, with the output of each stage being passed as input
                  to the next stage. some to key stage aggregate work ...
                </p>{" "}
                <br />
                <div>
                  <p>Matching Stage</p>
                  <p>Transformation Stages</p>
                  <p>Additional Stages</p>
                  <p>Output</p>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
