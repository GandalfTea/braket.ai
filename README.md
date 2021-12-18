```
8888P    d8888       dP                         dP                  dP               oo 
88          88       88                         88                  88                  
88          88       88d888b. 88d888b. .d8888b. 88  .dP  .d8888b. d8888P    .d8888b. dP 
88          88       88'  `88 88'  `88 88'  `88 88888"   88ooood8   88      88'  `88 88 
88          88       88.  .88 88       88.  .88 88  `8b. 88.  ...   88   dP 88.  .88 88 
88888    88888       88Y8888' dP       `88888P8 dP   `YP `88888P'   dP   88 `88888P8 dP                 
```

&nbsp;

#### Whitepaper : ...

&nbsp;

### About
We aim to create a set of tools for working with external datasets that cover most needs of a typical ML engineer and creates a community-driven framework for a competitive market. This includes a varied meritocratic marketplace that informs a user if a dataset is useful prior to buying it, an API that void the need of locally storing the data and if the user does choose to download the data, a new .database filetype that reduces the file size, bundled with a command-line interface that checks for data integrity and regularly updates the data. If an admin chooses, a dataset can also have GitHub-like functionality, allowing users to fork, submit pull requests, raise issues, open-sourcing the maintenance and updates. This allows for community-driven dataset creation.

&nbsp;
&nbsp;

### Motivation
The industry of ML has grown exponentially over the last couple of years. As the number of uses grow, so does the need for better and bigger datasets. It is past the time that a framework should be put in place to allow users to create and maintain datasets together; a banded effort to create a competitive market between datasets and between users and big corporations. Our goal is to offer one implementation of this framework and maintain it. All our code is open source, we are open to any competition. 

&nbsp;
&nbsp;

### Goals
  •	Users can search through a collection of datasets, filtered by tags and user score, thus creating a meritocracy of the best sets available.

  •	Allow the user to test a dataset online by allowing the upload of a model file with a certain initial layer matrix shape (dependent on the dataset), feed data into it and train it with a limited number of entries and present the results of the model to the user. Do not allow the user to access the dataset entries used to train the model or download the model in any shape or form. 

  •	Offer a variety of different selling methods and licenses. Allow users to buy a dataset by paying in full, partially buy a fraction of the dataset (and receive a random set number of entries), create debt by promising to pay in the future after training a model and using it, etc. Allow users to give out datasets for free, partial downloads for free or receive it under an open-source licence and transferring the licence over onto the user project. 

  •	Offer two main ways of using a dataset. One of them is the linked API that feeds the data directly into a training loop, and the other being a .dataset file that stores a portion of the dataset and links to the original dataset on the server. Users should be able to install the API through pip, or any other package manager and easily link towards the desired package. In the case of the .dataset file, users should be able to easily communicate with the file using the linked command-line interface and update, check integrity, and do any command available on the website. The file should be easily readable from Python and offer an easy syntax to parse.

  •	Users should be able to discuss datasets in a forum-like environment, raise issues, claim bias, commit changes and updates and see linked code example.

