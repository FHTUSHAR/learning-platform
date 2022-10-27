import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='border border-primary w-50 shadow mb-4 m-auto p-3 rounded'>
                <h3>Q1 :what is cors?</h3>
                <p ><strong>Ans : </strong>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
            </div>
            <div className='border border-primary w-50 shadow mb-4 m-auto p-3 rounded'>
                <h3>Q2 :Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p><strong>Ans :  </strong>Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.
                    I can use google,facebook,github,email and password authentication </p>
            </div>
            <div className='border border-primary w-50 shadow mb-4 m-auto p-3 rounded'>
                <h3>Q3 :How does the private route work?</h3>
                <p><strong>Ans : </strong>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in</p>
            </div>
            <div className='border border-primary w-50 shadow mb-4 m-auto p-3 rounded'>
                <h3>Q4 :What is Node? How does Node work?</h3>
                <p><strong>Ans : </strong>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive</p>
            </div>
        </div>
    );
};

export default Blog;