import React from 'react';
import ReactMarkdown from "react-markdown";

const content = `
## Recent Projects
- [pytorchjs](https://github.com/raghavmecheri/pytorchjs/), a JavaScript wrapper for [PyTorch](https://pytorch.org/)
- [BetterLoader](https://github.com/binitai/betterloader), an open source augmentation of the [PyTorch](https://pytorch.org/) DataLoader
- WasteClassify, a Deep Learning based automated waste segregation solution with [BinIt](https://binit.in/)
- [Chennai Volunteers](https://www.chennaivolunteers.org/), an online micro-volunteering portal for the [Giving Matters Foundation](https://givingmatters.in/)
- PriceMyData, an online platform for crowdsourcing data valuations
- [MongoPooler](https://www.npmjs.com/package/mongopooler), an npm module to make MongoDB access easier and more efficient
- CubeMania (100k+ downloads), a mobile application built to help people solve the Rubik's Cube
- Web application to aggregate and analyse housing complaints in NYC - built with [CSEG Tech](http://www.columbiaseg.org/cseg-tech)

## Activities
- Research Assistant with Columbia's [Clinicial Infomatics Group](http://www.cs.columbia.edu/~ansaf/cing/index.html), working on applications of NLP in healthcare
- Teaching Assistant for COMS 3203 - Discrete Math with [Prof. Ansaf Salleb-Aouissi](http://www.cs.columbia.edu/~ansaf/)
- Teaching Assistant (fmr.) for COMS 3101 - Programming in JavaScript with [Prof. Ramana Isukapalli](https://www.slideshare.net/slideshow/embed_code/key/fBotytSv48MnSa)
- Check out [DPI](https://www.columbiadpi.com/), [CBL](https://www.columbiabuildlab.com/), [LionBase](https://www.lionbase.nyc/), [CSEG](http://www.columbiaseg.org/), [CIV](https://columbiainternationalventures.com/), and [GRC](https://www.grcglobalgroup.com/)
- View my courses completed, and currently being taken [here](https://docs.google.com/document/d/1t84U6M0rCwHoXMBqXBh3OmVXqOs6WBZoRKjm7NoZDT8/edit?usp=sharing)

## Publications
- [Porting BIM Models to low-cost Virtual Reality](https://www.slideshare.net/slideshow/embed_code/key/fBotytSv48MnSa) - built @ [IIT, Madras](https://www.iitm.ac.in/) under Prof. Ashwin Mahalingam

## Posts
- [Fixing the PyTorch Dataloader](https://towardsdatascience.com/fixing-the-pytorch-dataloader-990b336b8e5a)

## Slides/Presentations
- [Am Overview of Image Segmentation](./slides/deeplearning/segmentation.html) for Prof [Peter Belhumeur](https://www.peterbelhumeur.com/)'s [Advanced Topics In Deep Learning](https://www.advancedtopicsindeeplearning.com/) class.
- [An overview of AlexNet, VGG, and GoogLeNet](./slides/deeplearning/classification.html) for Prof [Peter Belhumeur](https://www.peterbelhumeur.com/)'s [Advanced Topics In Deep Learning](https://www.advancedtopicsindeeplearning.com/) class.
- [Deploying an ML app - from idea to production](./slides/adi/deployinganmlapp.html), for [ADI](https://adicu.com/)'s mentorship program
- [Building stuff that people care about](./slides/dpi/buildingstuff.html), for the [Columbia Data Product Initiative](https://www.columbiadpi.com/)
`

export default () => <ReactMarkdown source={content} />
