interface dateObject {
  date: string
  time: string
}

export const transformDate = (date: Date): dateObject | null => {
  if (date) {
    const timeDatabase: Date = new Date(date)
    const actualTime: Date = new Date(timeDatabase.getTime())
    const timeString: string = actualTime.toString()
    const timeMessage: string[] = timeString.split(' ')
    const timeAux: string[] = timeMessage[4].split(':')
    const timeMessageLessSeconds: string = timeAux[0] + ':' + timeAux[1]
    const dateReturn =
      timeMessage[1] + ' ' + timeMessage[2] + ' ' + timeMessage[3]

    const returnObject: dateObject = {
      date: dateReturn,
      time: timeMessageLessSeconds
    }
    return returnObject
  } else {
    return null
  }
}
