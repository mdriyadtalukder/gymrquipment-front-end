import React from 'react';
import Footer from '../Footer/Footer';

const Blogs = () => {

    //questions and answers
    return (
        <div>
            <div className='container'>
                <h1 className='text-center mt-3'>Questions and answers</h1>
                <div className='row row-cols-lg-3 row-cols-md-3 row-cols-sm-1 row-cols-1 pt-4 pb-4'>
                    <div className='col mb-4'>
                        <div id='cards' className='card h-100 shadow rouded'>
                            <div className='card-body titles pb-5'>
                                <h3 className='text-center'>Difference between javascript and nodejs?</h3>
                                <div className='mt-3'>
                                    <h5>Javascript</h5>
                                    <ol>

                                        <li>It is basically used on the client-side.</li>
                                        <li>Javascript can only be run in the browsers.</li>
                                        <li>Javascript is capable enough to add HTML and play with the DOM. </li>
                                        <li>Javascript is used  in frontend development.</li>
                                    </ol>
                                </div>
                                <div className='mt-3'>
                                    <h5>NodeJS</h5>
                                    <ol>
                                        <li>It is mostly used on the server-side.</li>
                                        <li>We can run Javascript outside the browser with the help of NodeJS.</li>
                                        <li>Nodejs does not have capability to add HTML tags.</li>
                                        <li>Nodejs is used in server-side development.</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div >
                    <div className='col mb-4'>
                        <div id='cards' className='card h-100 shadow rouded'>
                            <div className='card-body titles pb-5'>
                                <h3 className='text-center'>When should you use nodejs and when should you use mongodb?</h3>
                                <p>There are many web servers built with nodejs that will then use MongoDB for storing data. MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database.Databases like MongoDB are a good choice when your data is document-centric and doesn't fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases.MongoDB and NodeJS are two different technologies.Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.</p>
                            </div>
                        </div>
                    </div >
                    <div className='col mb-4'>
                        <div id='cards' className='card h-100 shadow rouded'>
                            <div className='card-body titles pb-5'>
                                <h3 className='text-center'>What is the purpose of jwt and how does it work?</h3>
                                <p>WT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.For beginning developers, JSON stands for JavaScript Object Notation and is a text-based format for transmitting data across web applications. It stores information in an easy-to-access manner, both for developers and computers.JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
                            </div>
                        </div>
                    </div >
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;