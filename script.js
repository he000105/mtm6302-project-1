const data = {
  currentUser: 'currentUser',
  ideas: [{
      username: 'amyrobson',
      content: 'Non dolor veniam nostrud ad. Commodo ex officia reprehenderit eu laborum. Qui reprehenderit reprehenderit incididunt eiusmod voluptate cupidatat cupidatat dolor. Incididunt sint cupidatat dolore cupidatat ut do dolor nostrud ullamco aliqua aliqua excepteur. Fugiat nostrud esse voluptate magna nostrud nostrud sint et. Irure excepteur irure ullamco occaecat dolor deserunt. Cillum fugiat sunt ullamco ad enim ea eiusmod do et dolor adipisicing mollit aliqua mollit.\r\n',
      score: 3,
    },
    {
      username: 'maxblagun',
      content: 'Cupidatat veniam quis aliquip ut pariatur excepteur ut. Cupidatat reprehenderit nulla laborum dolore nulla voluptate cupidatat in. Sint tempor non duis sit deserunt culpa sunt labore eu sit consectetur. Excepteur reprehenderit et officia incididunt consectetur laborum consequat laboris excepteur ea adipisicing qui.\r\n',
      score: 10,
    },
    {
      username: 'maxblagun',
      content: 'Proident qui elit in deserunt velit eu veniam. Tempor velit cillum et dolore. Incididunt anim Lorem Lorem dolor voluptate deserunt cillum consequat ut. Ea fugiat culpa ex et pariatur dolor est officia ea dolore ullamco mollit. Cillum minim consequat ipsum deserunt velit mollit ad consectetur irure dolore proident qui.\r\n',
      score: 6,
    },
    {
      username: 'maxblagun',
      content: 'Officia exercitation cupidatat enim sint ea quis reprehenderit ipsum. Commodo ullamco deserunt reprehenderit qui in anim aliqua officia do in reprehenderit Lorem. Ipsum non aute officia est nisi sunt non. Proident in eiusmod sint aliquip qui officia deserunt eiusmod sit. Mollit voluptate anim cillum cupidatat duis est ad excepteur consequat fugiat cillum velit esse. Quis dolore sit ullamco qui.\r\n',
      score: 8,
    },
    {
      username: 'currentUser',
      content: 'Incididunt ut ut velit dolor irure Lorem ex nostrud et laborum commodo dolore laborum culpa. Adipisicing ullamco eu id sit velit ut laboris irure esse quis. Mollit minim laborum do exercitation sint magna ea ea eu eu laboris aliquip anim culpa. Consectetur eiusmod esse ipsum incididunt duis ea nisi qui duis pariatur.\r\n',
      score: 3,
    },
    {
      username: 'currentUser',
      content: 'Id aute eu quis tempor laborum duis nostrud proident nostrud culpa est ad. Do dolor cillum ullamco excepteur eiusmod laboris dolore do Lorem. Exercitation eiusmod laborum enim culpa esse.\r\n',
      score: 1,
    },
    {
      username: 'amyrobson',
      content: 'In magna cupidatat ipsum exercitation incididunt non eu amet occaecat et sint irure consequat. Sunt labore incididunt ut culpa aliquip excepteur est. Enim Lorem dolor adipisicing veniam proident quis ad laborum in commodo qui. Proident elit ullamco aliqua non excepteur in fugiat consequat adipisicing ut eu id sunt laboris.\r\n',
      score: 7,
    },
  ],
}
const $ideas = document.getElementById('ideas')
const $addIdea = document.getElementById('addIdea')
const $newIdea = document.getElementById('newIdea')
const $submitBtn = document.getElementById('submit')

function createIdeas() {
  const html = []

  for (let i = 0; i < data.ideas.length; i++) {
    html.push(`  <div id="ideas">
                 <div class="card m-3">
                    <div class="card-header">${data.ideas[i].username}

                    <button class="btn btn-primary btn-sm edit" data-index="${i}">Edit</button>
                    <button class="btn btn-close btn-danger btn-sm delete" data-index="${i}"></button> 
                    </div>
                    <div class="card-body">
                     <p class="card-text">${data.ideas[i].content}</p>
                     <button class="btn btn-primary btn-sm upvote" data-index="${i}">+</button>
                     <small>${data.ideas[i].score}</small>
                     <button class="btn btn-secondary btn-sm downvote" data-index="${i}">-</button>
                    </div>
                 </div>
              </div>`)
  }
  $ideas.innerHTML = html.join('')
}

createIdeas()


//new idea
$addIdea.addEventListener('submit', function (e) {
  e.preventDefault()
  const currentUserIdeas = {
    username: 'currentUser',
    content: $newIdea.value,
    score: 0,
  }
  $addIdea.reset()
  data.ideas.push(currentUserIdeas)
  createIdeas()
})

$submitBtn.addEventListener('click', function (e) {
  e.preventDefault()
  const currentUserIdeas = {
    username: 'currentUser',
    content: $newIdea.value,
    score: 0,
  }
  $addIdea.reset()
  data.ideas.push(currentUserIdeas)
  createIdeas()
})

//changing score
$ideas.addEventListener('click', function (e) {
  if (e.target.classList.contains('upvote')) {
    const index = e.target.dataset.index
    const idea = data.ideas[index]
    idea.score++
    createIdeas()
  }
  if (e.target.classList.contains('downvote')) {
    const index = e.target.dataset.index
    const idea = data.ideas[index]
    idea.score--
    createIdeas()
  }
  if (e.target.classList.contains('delete')) {
    const index = e.target.dataset.index
    data.ideas.splice(index, 1)
    createIdeas()
  }
})

//edit Idea
const $editBtn = document.getElementById('edit')

function editIdea() {
  const $editBox = document.getElementById('editbox')
  const editBox = `<h4 class="m-2">Edit Idea</h4>
    <textarea id="editText" rows="2" class="form-control"></textarea>
    <button id="change" class="btn btn-primary">Edit Idea</button>`
  $editBox.innerHTML = editBox
  const $submitChange = document.getElementById('change')
  const $editText = document.getElementById('editText')
  $submitChange.addEventListener('click', function () {
    data.ideas.push('currentUser', $editText.value, 0)
  })
}
$editBtn.addEventListener('click', function (e) {
  e.preventDefault()
  editIdea()
})