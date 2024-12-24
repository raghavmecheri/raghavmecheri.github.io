import React from 'react';
import ReactMarkdown from "react-markdown";

const content = `
## I work strange hours, please don't feel rushed to reply
I work whenever suits me the best. Sometimes, this includes early mornings, late nights, and the weekends. This is <b>not at all</b> indicative of any sense of urgency. I'm just working when convenient for me :)
<br>
Do whatever works best for you. Trust me, I'm doing the same too.
<br>
<br>
PS - if you want to chat about this, just ask and I'd be glad to clear anything up!
`

export default () => <ReactMarkdown>{content}</ReactMarkdown>
