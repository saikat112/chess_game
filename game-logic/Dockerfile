# Use an official GCC runtime as a parent image
FROM gcc:latest

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . .

# Ensure the /etc/apt/sources.list file exists
RUN echo "deb http://deb.debian.org/debian bookworm main" > /etc/apt/sources.list && \
    echo "deb http://security.debian.org/debian-security bookworm-security main" >> /etc/apt/sources.list && \
    echo "deb http://deb.debian.org/debian bookworm-updates main" >> /etc/apt/sources.list

# Optionally, use a different mirror
RUN sed -i 's|http://deb.debian.org/debian|http://ftp.debian.org/debian|' /etc/apt/sources.list

# Install CMake
RUN apt-get update && apt-get install -y --fix-missing cmake

# Build the project
RUN cmake . && make

# Run the executable
CMD ["./ChessGame"]
