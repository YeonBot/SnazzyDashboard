module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'select',
        name: 'category',
        message: 'Which Atomic design level?',
        choices: ['containers', 'components']
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the component name?'
      },
      {
        type: 'input',
        name: 'dir',
        message: 'Where is the directory(Optional)',
      },
    ]
    return inquirer
      .prompt(questions)
      .then(answers => {
        const { category, name, dir } = answers
        const Name = name.charAt(0).toUpperCase() + name.slice(1);
        const path = `${category}/${dir ? `${dir}/` : ``}${Name}`
        const absPath = `src/${path}`
        return { ...answers, Name, path, absPath, category }
      })
  }
}