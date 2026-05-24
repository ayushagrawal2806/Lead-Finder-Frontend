function ChannelTable({ channels }) {
  return (
    <table border="1" cellPadding="10" cellSpacing="0" width="100%">
      <thead>
        <tr>
          <th>Channel Name</th>

          <th>Subscribers</th>

          <th>Email</th>
        </tr>
      </thead>

      <tbody>
        {channels.map((channel, index) => (
          <tr key={index}>
            <td>{channel.channelName}</td>

            <td>{channel.subscribers.toLocaleString()}</td>

            <td>{channel.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ChannelTable;
