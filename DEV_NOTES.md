
# 0xPorti CLI Web - Dev Notes

-------------------------------------------------

## Introduction

🤔 This file is the documentation of the code, its is aimed to help the developer reading this to understand the code


## App Workflow

In the root of the project we wont find any useful data, just a bunch of dotfiles and the standard files of a react project with vite

All the relevant files are located inside the `src/` directory.

> #### Entry Point - `App.jsx`
> In this file will handle the when to display the 3 main scenes of the project (*we will learn more about the scenes later*), basically we are importing the 3 components required for the 3 scenes.
>
> Since the principal scene is the third one, that component is lazy-loaded, as well as its props.
>
> The initial state of the scene is calculated with the current timestamp and the one stored at the Local Storage to determine if the have been more than the time determined by the constants.
>
> If the timestamps comparation wast true (*time exceded*) the splash screen in rendered. If the comparation returns false, the app will jump to the 3rd screen, the Terminal.
>
> Then, in the `useEffect`, the hook will check if we are at least in the second screen (*booting screen*) so it will start loading the props of the 3rd component. This step is made this way because the resources imported need to read a value from the Local Storage that the 1st screen should have written, so we need to import this resources at this point


## Languages

The language of the project strings is determined in the first screen (*splash*) where the option selected will be stored in the Local Storage as the `lang` key. This key take the country code as its value: *Example: "es" (spanish), "en" (english)*. Actually this code could be anything but stick to that standard for an easier understanding.

Then, each string that is required to be translated based on the language selected by the user should be exported from a file in the `src/locales/` directory.

To switch between languages, the app uses the `getLang` function, exported from [`src/utils/get_lang.jsx`](https://github.com/PortiESP/porti-web-cmd/blob/master/src/utils/get_lang.jsx), this function will take an object with the definition of all the strings in every language we have defined, then it will check what language is selected by the user in the Local Storage database and it will return only the object with the strings of the language selected
> ⚠ This function is executed at the **import** time, so that is why we dynamically imported the `terminal_settings.jsx` file in the `App.jsx`, to prevent the function to be executed before the user have selected the language

## The Terminal Component

This component has its own [README](https://github.com/PortiESP/terminal_web/blob/master/README.md) file, but I will cover here the approach that must be taken to understand the component

The component is personalizable by its props, there we can set the commands that it will run and some placeholders. The configuration I used for the project is defined in the following file

> #### Terminal Component Props - [`src/assets/terminal_settings.jsx`](https://github.com/PortiESP/porti-web-cmd/blob/master/src/assets/terminal_settings.jsx)
> This is the principal file in relation to the personalization features of the [`TerminalWeb`](https://github.com/PortiESP/terminal_web) component
>
> This file exports an object with 3 keys
> - Initial Message
> - Prefix
> - Commands
>
> > The `initialMessage` key takes an array of strings, this strings will be printed to the terminal the first time this one is rendered. In this case I have defined an ASCII art and an introduction message.
> 
> > The `prefix` key takes a string as its value, this value will precedes the input of the user. It is also known as the prompt. 
>
> > The `commands` key takes an object as its value. This object is used to define the available commands of the terminal and actions that the command will run. The commands are parsed and handled by the hook: [`src\components\terminal_web\hooks\use_terminal_commands.jsx`](https://github.com/PortiESP/terminal_web/blob/master/hooks/use_terminal_commands.jsx) (*read the hook JSDocs at the hook file*)