export const topTitleVariant = {
  notHovered: {
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1
    }
  },
  hovered: {
    transition: {
      staggerChildren: 0.07
    }
  }
}

export const topSpanVariant = {
  notHovered: {
    opacity: 0,
    y: '-100%',
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  },
  hovered: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
}

export const bottomTitleVariant = {
  notHovered: {
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1
    }
  },
  hovered: {
    transition: {
      staggerChildren: 0.08
    }
  }
}

export const bottomSpanVariant = {
  notHovered: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  },
  hovered: {
    opacity: 0,
    y: '100%',
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
}
