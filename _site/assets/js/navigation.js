const initNavigation = function () {
  const parentLists = document.querySelectorAll('nav.global li.has-children')

  parentLists.forEach(function (list, index) {
    const classList = list.classList

    classList.add('collapsible')
    classList.add(isSelected(list) ? 'open' : 'closed')

    const toggle = document.createElement('i')
    toggle.className = 'toggle'
    toggle.addEventListener('click', () => {
      if (classList.contains('closed')) {
        classList.remove('closed')
        classList.add('open')
      } else {
        classList.remove('open')
        classList.add('closed')
      }
    })

    list.prepend(toggle)
  })
}

const isSelected = function (list) {
  if (list.classList.contains('selected')) {
    return true
  }

  if (list.querySelectorAll('li.selected').length > 0) {
    return true
  }

  return false
}

document.addEventListener('DOMContentLoaded', initNavigation)
