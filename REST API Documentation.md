Who wants to be a millionaire App Server
Who wants to be a millionaire App is an application generate random question for gaming purpose

This app has :

- JSON formatted response

&nbsp;

Tech Stack used to build this app :

- Node JS
- Express JS framework
- cors
- axios

&nbsp;



## GET /easy
>get easy question

_Request Header_

```
not needed
```

_Request Body_

```
not needed
```

_Response (200 - OK)_

```
{
"results":[
  {"category":"<category>",
  "type":"<multiple>",
  "difficulty":"<easy>",
  "question":"<question>",
  "correct_answer":"<corresct answer>",
  "incorrect_answers":"<array of incorrect answer>"}
  ]
}
```

## GET /medium
>get medium question
_Request Header_

```
not needed
```

_Request Body_

```
not needed
```

_Response (200 - OK)_

```
{
"results":[
  {"category":"<category>",
  "type":"<multiple>",
  "difficulty":"<medium>",
  "question":"<question>",
  "correct_answer":"<corresct answer>",
  "incorrect_answers":"<array of incorrect answer>"}
  ]
}
```

## GET /hard

>get hard question
_Request Header_

```
not needed
```

_Request Body_

```
not needed
```

_Response (200 - OK)_

```
{
"results":[
  {"category":"<category>",
  "type":"<multiple>",
  "difficulty":"<hard>",
  "question":"<question>",
  "correct_answer":"<corresct answer>",
  "incorrect_answers":"<array of incorrect answer>"}
  ]
}
```

## GET /askaudience/:rightAnswer

_Request Header_

```
not needed
```

_Request Body_

```
not needed
```
_Request Params_

```
{rightAnswer : "<rightAnswer>"}
```
_Response (200 - OK)_

```
"<graph URL (string)>"
```

