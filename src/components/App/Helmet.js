import React from 'react';
import { Helmet } from 'react-helmet';


export default () => (
  <Helmet>
    <title>Test Avantrip</title>
    <meta content="Helmet application" name="description" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900" rel="stylesheet" />
  </Helmet>
);
