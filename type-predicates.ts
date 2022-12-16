interface Boat {
  size: string
}

interface Bike {
  isUsableOnLand: boolean
}

function isBoat(transport: Bike | Boat): transport is Boat {
  return typeof (transport as Boat).size === 'string'
}

export const validateTransport = (transport: Bike | Boat) => {
  if (isBoat(transport)) {
    console.log('Transport can float')
  } else {
    console.log('Transport is usable on land')
  }
}
