export default {
    "*.{ts,tsx}": [
        `prettier --write`,
        `eslint --max-warnings 0`,
        `jest --passWithNoTests --findRelatedTests`
    ],
    "*.{java}": [
        () => `docker run --rm
        -v ${process.env.HOME}/.m2:/var/maven/.m2
        -v ${process.cwd()}:/build
        -v /etc/passwd:/etc/passwd:ro
        -v /etc/group:/etc/group:ro
        --workdir /build
        --user=${process.getuid()}:${process.getgid()}
        -e MAVEN_CONFIG=/var/maven/.m2
        maven:3-amazoncorretto-21
        mvn clean spotless:check checkstyle:check -Duser.home=/var/maven`,
    ]
};
