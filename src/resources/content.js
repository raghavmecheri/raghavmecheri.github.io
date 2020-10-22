import React from 'react';
import ReactMarkdown from "react-markdown";

const content = `
## Projects
- [ptjs](https://github.com/raghavmecheri/ptjs/), a JavaScript wrapper for [PyTorch](https://pytorch.org/)
- [BetterLoader](https://github.com/binitai/betterloader), an open source augmentation of the [PyTorch](https://pytorch.org/) DataLoader
- WasteClassify, an AI based automated waste segregation solution with BinIt
- Chennai Volunteers, an online micro-volunteering portal for the city of Chennai with the Giving Matters Foundation
- PriceMyData, an online platform for crowdsourcing data valuations
- GenerateRubric, a solution to autogenerate grading rubrics for instructors and teaching assistants
- Porting BIM Models to low-cost Virtual Reality - built @ IIT, Madras under Prof. Ashwin Mahalingam
- MongoPooler, an npm module to make MongoDB access easier and more efficient
- CubeMania, a mobile application built to help people solve the Rubik's Cube - built with Kunal Agarwal
- LiStartup, an ML/AI solution to predict startup valuations - built with LionBase
- An analysis of soccer transfers in order to understand if player valuations can be predicted
- Web application to aggregate and analyse housing complaints in NYC - built with CSEG Tech
- LectureHub, a web based note-sharing platform for students - built with Mustafa Eyeceoz, Ajit Akole & Daniel Tao
- An NLP based classification system, which is able to identify spam text messages
- MyCity, a complaint submission and management system for Indian cities - built with Kunal Agarwal

## Activities
- Research Assistant with Columbia's [Clinicial Infomatics Group](http://www.cs.columbia.edu/~ansaf/cing/index.html), working on the applications of NLP to healthcare
- Teaching Assistant for COMS 3203 - Discrete Math with [Prof. Ansaf Salleb-Aouissi](http://www.cs.columbia.edu/~ansaf/)
- Teaching Assistant (fmr.) for COMS 3101 - Programming in JavaScript with [Prof. Ramana Isukapalli](https://www.slideshare.net/slideshow/embed_code/key/fBotytSv48MnSa)
- Check out [DPI](https://www.columbiadpi.com/), [CBL](https://www.columbiabuildlab.com/), [LionBase](https://www.lionbase.nyc/), [CSEG](http://www.columbiaseg.org/), [CIV](https://columbiainternationalventures.com/), and [GRC](https://www.grcglobalgroup.com/)
- View my courses completed, and currently being taken [here](https://docs.google.com/document/d/1t84U6M0rCwHoXMBqXBh3OmVXqOs6WBZoRKjm7NoZDT8/edit?usp=sharing)
`

export default () => <ReactMarkdown source={content} />