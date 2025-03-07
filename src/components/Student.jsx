function Student(props) {
  const styles = {
    container: { 
      border: '1px solid #eee', 
      width: 'max-content', 
      margin: '10px auto',
      padding: '10px',
      borderRadius: '6px',
      position: 'relative'
    },
    studentImg: {
      borderRadius: '50%',
    },
    ranking: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      fontSize: '7.5em',
      fontWeight: 'bold',
      textShadow: '-3px 0 white, 0 3px white, 3px 0 white, 0 -3px white'
    }
  }

  return (
    <div style={styles.container}>
      <h2>{props.studentName}</h2>
      <img 
        src={props.studentImg}
        alt='student' 
        width={200}
        style={styles.studentImg}
      />
      <span
        style={styles.ranking}
      >
        {props.ranking}
      </span>
    </div>
  )
}

export default Student